# My Portfolio - Angular (Legacy NgModule)

A legacy Angular application built with NgModule (not standalone components). This is a traditional Angular project structure suitable for larger applications or teams familiar with the NgModule approach.

## Features

- **NgModule Architecture**: Uses the traditional Angular module system
- **Routing**: Angular Router pre-configured with AppRoutingModule
- **Styling**: SCSS support for component and global styles
- **TypeScript**: Strict TypeScript configuration
- **Testing Ready**: Karma and Jasmine configured for unit tests

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   ├── app.component.html        # Root template
│   ├── app.component.scss        # Root styles
│   ├── app.module.ts             # Main application module
│   └── app-routing.module.ts     # Routing configuration
├── main.ts                       # Application bootstrap file
├── index.html                    # HTML entry point
└── styles.scss                   # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you modify any source files.

### Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
npm test
```

## Architecture Overview

This project follows Angular's traditional NgModule architecture:

1. **AppModule** - The root module that bootstraps the application
2. **AppRoutingModule** - Handles all application routing
3. **AppComponent** - The root component with navigation and outlets
4. **main.ts** - Bootstrap file that starts the application

### Adding New Features

To add new features to this project:

1. **Create a Feature Module**:
   ```bash
   ng generate module features/myfeature
   ```

2. **Create Components**:
   ```bash
   ng generate component features/myfeature/mycomponent
   ```

3. **Update Routing**:
   - Add routes to the feature module's routing module
   - Import the feature module in AppRoutingModule

## Configuration Files

- `angular.json` - Angular CLI configuration
- `tsconfig.json` - TypeScript compiler options
- `karma.conf.js` - Testing framework configuration
- `package.json` - Project dependencies and scripts

## Performance Optimization

- Tree-shaking enabled for production builds
- AOT (Ahead-of-Time) compilation for production
- Lazy loading ready for feature modules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
