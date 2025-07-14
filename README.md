# MisPelis - Aplicación de Gestión de Películas

Una aplicación web completa desarrollada en React para gestionar una colección de películas con funcionalidades administrativas y vista pública.

## 🚀 Características Principales

### ✅ Criterio 4: Uso Correcto de React Router

La aplicación implementa **React Router DOM v7.6.3** con las siguientes características:

#### 🛣️ Sistema de Rutas Implementado

- **`/`** - Página de inicio (administración de películas)
- **`/categoria/:categoria`** - Películas filtradas por categoría con parámetros dinámicos
- **`/peliculas`** - Vista pública de películas con sistema de votación
- **`/blog`** - Blog de películas
- **`/contacto`** - Formulario de contacto funcional
- **`/*`** - Página 404 para rutas no encontradas

#### 🔧 Funcionalidades de Enrutamiento

1. **BrowserRouter**: Configuración principal del enrutamiento
2. **Routes y Route**: Definición de rutas con componentes asociados
3. **useParams**: Extracción de parámetros de URL (categorías)
4. **Link**: Navegación declarativa sin recargas de página
5. **Navegación programática**: Redirecciones y navegación condicional

#### 🏗️ Arquitectura de Componentes

```
src/
├── App.js                 # Router principal y configuración de rutas
├── components/           # Componentes reutilizables
│   ├── Navbar.js         # Navegación con Links de React Router
│   ├── Listado.js        # Lista de películas
│   ├── Crear.js          # Formulario de creación
│   ├── Buscador.js       # Componente de búsqueda
│   └── VistaPublica.js   # Vista pública con votación
└── pages/               # Páginas principales (rutas)
    ├── Inicio.js         # Página de administración
    ├── Categoria.js      # Página de categorías (usa useParams)
    ├── Peliculas.js      # Vista pública
    ├── Blog.js           # Blog de películas
    ├── Contacto.js       # Formulario de contacto
    └── NoEncontrada.js   # Página 404
```

## 🎯 Otras Funcionalidades

### 📊 Gestión de Datos
- **localStorage**: Persistencia de datos local
- **Estado global**: Manejo de estado con hooks de React
- **CRUD completo**: Crear, leer, actualizar y eliminar películas

### 🎨 Interfaz de Usuario
- **Diseño responsivo**: Adaptable a móviles y tablets
- **SweetAlert2**: Alertas y confirmaciones elegantes
- **CSS Grid y Flexbox**: Layout moderno y flexible

### 🖼️ Gestión de Imágenes
- **Subida de archivos**: Conversión a base64 para almacenamiento
- **Previsualización**: Vista previa de imágenes
- **Gestión de memoria**: Límite de 5MB por imagen

### 🔍 Búsqueda y Filtrado
- **Búsqueda en tiempo real**: Filtrado instantáneo
- **Filtros por categoría**: 8 categorías predefinidas
- **Navegación por categorías**: URLs dinámicas con parámetros

### 👥 Sistema de Votación
- **Like/Dislike**: Sistema de votación público
- **Prevención de spam**: Un voto por usuario por película
- **Cambio de voto**: Posibilidad de cambiar la votación

## 🛠️ Instalación y Uso

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Iniciar la aplicación
npm start

# La aplicación estará disponible en http://localhost:3000
```

## 📦 Dependencias Principales

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.3",
  "sweetalert2": "^11.22.2",
  "sweetalert2-react-content": "^5.1.0"
}
```

## 🌐 Navegación

### Barra de Navegación
- **Inicio**: Administración de películas (CRUD)
- **Categorías**: Dropdown con 8 categorías
  - Acción, Comedia, Drama, Terror
  - Ciencia Ficción, Romance, Animación, Documental
- **Películas**: Vista pública con votación
- **Blog**: Artículos sobre películas
- **Contacto**: Formulario funcional

### URLs Dinámicas
- `/categoria/Acción` - Películas de acción
- `/categoria/Comedia` - Películas de comedia
- `/categoria/Drama` - Películas de drama
- etc.

## 🎨 Características de UI/UX

- **Responsive Design**: Funciona en todos los dispositivos
- **Hover Effects**: Efectos interactivos en botones y cards
- **Loading States**: Feedback visual durante operaciones
- **Error Handling**: Manejo elegante de errores
- **Confirmaciones**: Diálogos de confirmación para acciones críticas

## 🔧 Estructura Técnica

### Hooks Utilizados
- `useState`: Manejo de estado local
- `useEffect`: Efectos secundarios y ciclo de vida
- `useParams`: Extracción de parámetros de URL

### Patrones de Diseño
- **Component Composition**: Componentes reutilizables
- **Props Drilling**: Paso de datos entre componentes
- **Controlled Components**: Formularios controlados
- **Conditional Rendering**: Renderizado condicional

## 📱 Responsividad

La aplicación está optimizada para:
- **Desktop**: Layout completo con sidebar
- **Tablet**: Layout adaptado sin pérdida de funcionalidad
- **Mobile**: Layout apilado y navegación optimizada

---

**Desarrollado con React 19 y React Router DOM 7** 🚀
