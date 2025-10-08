"""
Generate Adobe Swatch Exchange (.ase) file for Fiore Color Palette
Official colors from .github/fiore-color-palette.md
"""

import struct

def hex_to_rgb(hex_color):
    """Convert hex color to RGB float values (0-1 range)"""
    hex_color = hex_color.lstrip('#')
    r = int(hex_color[0:2], 16) / 255.0
    g = int(hex_color[2:4], 16) / 255.0
    b = int(hex_color[4:6], 16) / 255.0
    return r, g, b

def write_string(s):
    """Encode string for ASE format (UTF-16 BE with null terminator)"""
    return s.encode('utf-16-be') + b'\x00\x00'

def create_color_entry(name, hex_color, color_mode='RGB'):
    """Create a single color entry for ASE file"""
    r, g, b = hex_to_rgb(hex_color)
    
    # Block type (0x0001 = color entry)
    data = struct.pack('>H', 0x0001)
    
    # Name string
    name_data = write_string(name)
    name_length = len(name) + 1  # +1 for null terminator
    data += struct.pack('>H', name_length)
    data += name_data
    
    # Color mode (RGB)
    data += b'RGB '
    
    # RGB values (3 floats)
    data += struct.pack('>fff', r, g, b)
    
    # Color type (0 = Global, 1 = Spot, 2 = Normal)
    data += struct.pack('>H', 2)
    
    # Block length
    block_length = len(data) - 2  # Exclude the block type itself
    
    return struct.pack('>H', 0x0001) + struct.pack('>I', block_length) + data[2:]

def create_group_start(group_name):
    """Create a group start marker"""
    name_data = write_string(group_name)
    name_length = len(group_name) + 1
    
    block_data = struct.pack('>H', name_length) + name_data
    block_length = len(block_data)
    
    return struct.pack('>H', 0xC001) + struct.pack('>I', block_length) + block_data

def create_group_end():
    """Create a group end marker"""
    return struct.pack('>H', 0xC002) + struct.pack('>I', 0)

def generate_ase_file():
    """Generate the complete ASE file"""
    
    # ASE file signature and version
    ase_data = b'ASEF'  # Signature
    ase_data += struct.pack('>HH', 1, 0)  # Version 1.0
    
    # Define all colors from Fiore palette
    colors = []
    
    # Background Group
    colors.append(('group_start', 'Background'))
    colors.append(('color', 'Deep Space Black', '#0a0a0f'))
    colors.append(('group_end',))
    
    # Petal Colors Group
    colors.append(('group_start', 'Petals'))
    colors.append(('color', 'Petal Base', '#1a2b5c'))
    colors.append(('color', 'Petal Mid', '#2d4a8f'))
    colors.append(('color', 'Petal Highlight', '#4d6bb3'))
    colors.append(('group_end',))
    
    # Glow System Group
    colors.append(('group_start', 'Glow System'))
    colors.append(('color', 'Glow Core', '#e8f4ff'))
    colors.append(('color', 'Glow Inner', '#6b9fff'))
    colors.append(('color', 'Glow Mid', '#4d7fcf'))
    colors.append(('color', 'Glow Outer', '#2d4a8f'))
    colors.append(('group_end',))
    
    # Text Colors Group
    colors.append(('group_start', 'Text'))
    colors.append(('color', 'Text Primary', '#c5d9ff'))
    colors.append(('color', 'Text Secondary', '#6b9fff'))
    colors.append(('color', 'Text Tertiary', '#8ba8d9'))
    colors.append(('group_end',))
    
    # Stroke Colors Group
    colors.append(('group_start', 'Stroke'))
    colors.append(('color', 'Stroke Base', '#1a2b5c'))
    colors.append(('color', 'Stroke Highlight', '#4d6bb3'))
    colors.append(('group_end',))
    
    # Build blocks
    blocks = b''
    block_count = 0
    
    for item in colors:
        if item[0] == 'group_start':
            blocks += create_group_start(item[1])
            block_count += 1
        elif item[0] == 'group_end':
            blocks += create_group_end()
            block_count += 1
        elif item[0] == 'color':
            blocks += create_color_entry(item[1], item[2])
            block_count += 1
    
    # Add block count
    ase_data += struct.pack('>I', block_count)
    
    # Add all blocks
    ase_data += blocks
    
    return ase_data

if __name__ == '__main__':
    # Generate the ASE file
    ase_content = generate_ase_file()
    
    # Write to file
    output_path = 'fiore-palette.ase'
    with open(output_path, 'wb') as f:
        f.write(ase_content)
    
    print(f"✓ Generated {output_path}")
    print(f"  Total size: {len(ase_content)} bytes")
    print(f"  Colors included:")
    print(f"    - Background: 1 color")
    print(f"    - Petals: 3 colors")
    print(f"    - Glow System: 4 colors")
    print(f"    - Text: 3 colors")
    print(f"    - Stroke: 2 colors")
    print(f"  Total: 13 colors in 5 groups")
