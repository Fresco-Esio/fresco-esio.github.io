# Fiore Interface - AI Coding Agent Instructions

# Fiore Interface – System Instructions
Copilot: follow the design rules defined in  
`.github/fiore-philosophy.md`, `.github/fiore-implementation.md`, and `.github/fiore-color-palette.md`.

Use Fiore's midnight-blue aesthetic, 8-petal radial layout, and motion principles as defaults for all UI code.

**CRITICAL**: Always use the official color palette defined in `.github/fiore-color-palette.md` for all color values. Do not create custom colors or modify the established palette. Interface - AI Coding Agent Instructions

# Fiore Interface – System Instructions
Copilot: follow the design rules defined in  
`.github/fiore-philosophy.md` and `.github/fiore-implementation.md`.

Use Fiore’s midnight-blue aesthetic, 8-petal radial layout, and motion principles as defaults for all UI code.

## Architecture Overview

**Fiore** is a full-stack web application with a FastAPI Python backend and React frontend featuring a distinctive animated flower interface. The project uses a **monorepo structure** with separate `backend/` and `frontend/` directories.

### Tech Stack
- **Backend**: FastAPI + MongoDB (Motor async driver) + Pydantic models
- **Frontend**: React 19 + Tailwind CSS + shadcn/ui + Framer Motion
- **Development**: Craco for React config, Emergent containerization

## Key Architecture Patterns

### Backend (`backend/server.py`)
- **API Router Pattern**: All routes use `/api` prefix via `APIRouter(prefix="/api")`
- **MongoDB Integration**: Async operations using Motor client with environment-based connection
- **Pydantic Models**: Separate `Model` and `ModelCreate` classes (e.g., `StatusCheck` vs `StatusCheckCreate`)
- **CORS Configuration**: Uses environment variable `CORS_ORIGINS` (comma-separated)

```python
# Standard pattern for new endpoints
@api_router.post("/resource", response_model=ResourceModel)
async def create_resource(input: ResourceModelCreate):
    resource_dict = input.dict()
    resource_obj = ResourceModel(**resource_dict)
    await db.collection_name.insert_one(resource_obj.dict())
    return resource_obj
```

### Frontend Component Architecture
- **shadcn/ui System**: All UI components in `src/components/ui/` follow shadcn conventions
- **Path Aliases**: Use `@/` for src imports (configured in both craco.config.js and components.json)
- **Component Structure**: Custom components in `src/components/`, utilities in `src/lib/utils.js`
- **Styling**: CSS variables + Tailwind classes, dark mode support via CSS classes

### The Fiore Hero Component
The main visual component (`FioreHero.jsx`) features:
- **Framer Motion Animation**: Reduced motion respect, infinite breathing effect
- **SVG Flower**: Complex gradient definitions, responsive positioning
- **Orbital Labels**: Mathematical positioning using polar coordinates with elliptical transformation

## Development Workflows

### Frontend Development
```bash
cd frontend
npm start  # Runs on localhost:3000
```

### Backend Development
```bash
cd backend
uvicorn server:app --reload  # Requires .env file with MONGO_URL and DB_NAME
```

### Environment Configuration
- Backend requires `.env` file in `backend/` directory with `MONGO_URL` and `DB_NAME`
- Frontend supports `DISABLE_HOT_RELOAD=true` environment variable for performance
- CORS origins configured via `CORS_ORIGINS` environment variable

## Project-Specific Conventions

### File Organization
- **UI Components**: Follow shadcn naming (`button.jsx`, `card.jsx`) with forwardRef pattern
- **Custom Components**: PascalCase files (e.g., `FioreHero.jsx`)
- **Utilities**: Single `utils.js` file with `cn()` function for className merging

### Code Style
- **Frontend**: Uses `cn()` utility for conditional className merging
- **Backend**: Async/await patterns, Pydantic validation, environment-based configuration
- **Components**: Consistent use of `React.forwardRef` for shadcn components

### Testing Structure
- Uses `test_result.md` for testing communication between agents
- YAML format for tracking implementation status and testing results
- Tests located in `tests/` directory (currently minimal)

## Integration Points

### API Communication
- Backend serves API at `/api/*` routes
- Frontend likely consumes via axios (included in dependencies)
- Status check endpoints demonstrate CRUD pattern

### Styling System
- CSS variables defined in Tailwind config for consistent theming
- Custom radius variables (`--radius`) used throughout
- Dark mode support via class strategy

### Build System
- **Frontend**: Create React App with Craco for customization
- **Path Resolution**: Webpack alias for `@/` imports
- **Hot Reload**: Configurable via environment variables for performance tuning

## Dependencies to Note
- **@radix-ui**: Extensive use for headless UI components
- **framer-motion**: Complex animations with accessibility considerations
- **class-variance-authority**: For button and component variants
- **Motor**: Async MongoDB driver (not pymongo directly)

When adding new features, follow the established patterns for API routes, component structure, and styling conventions.