# AI Collaboration Rules

## General Principles

- Always prioritize performance, maintainability, and scalability.
- Enforce clear separation of concerns and single responsibility.
- Prefer Composition API and strongly typed interfaces.
- Avoid unnecessary abstraction or premature optimization.

## Component Guidelines

- Prefer atomic design methodology.
- Use `defineProps`/`defineEmits` with types.
- Always define a `name` for components for better DX.
- Co-locate tests, styles, and storybook files.

## Data Fetching

- Use Vue Query for remote state and caching.
- Keep Axios requests within `services/` layer.
- Avoid direct HTTP requests inside components.

## Changelog & Versioning

- Use `standard-version` to manage changelogs.
- No manual edits to `CHANGELOG.md`.

## Documentation

- Update `docs/` when adding a new pattern, convention or tool.
- IA must read `context.md` and `rules.md` before suggesting changes.

## Naming Conventions

- camelCase for variables/functions
- PascalCase for components/classes
- kebab-case for filenames
