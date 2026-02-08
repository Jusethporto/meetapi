# MeetAPI Landing Page

Landing page moderna para **MeetAPI**, una consultora de soluciones digitales para negocios, construida con **Next.js**, **TypeScript** y **Tailwind CSS** (con componentes UI basados en shadcn/ui y Radix UI).

El objetivo de este proyecto es ofrecer una página de marketing clara, profesional y orientada a conversión, que explique los servicios de MeetAPI, muestre beneficios, proceso de trabajo y un formulario de contacto para captación de leads.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **UI:** React + Tailwind CSS + shadcn/ui + Radix UI
- **Iconos:** lucide-react
- **Formularios y validación:** react-hook-form, zod
- **Temas:** next-themes (modo claro/oscuro)

> Nota: Las versiones exactas de dependencias se pueden consultar en `package.json` y `package-lock.json`.

---

## ✨ Características principales

- **Landing page completa** con secciones de hero, servicios, beneficios, proceso, testimonios y contacto.
- **Diseño responsive** (mobile-first) optimizado para escritorio, tablet y móvil.
- **Modo oscuro/claro** con selector de tema.
- **Soporte multi-idioma** a través de un provider de idioma y toggles (ej. ES/EN).
- **Componentes reutilizables** para layout, botones, inputs y secciones.
- **Buenas prácticas** de estructura, tipado y organización de código.

---

## 📁 Estructura de carpetas (resumen)

```text
.
├─ app/                # Rutas y layout principal de Next.js (App Router)
│  ├─ layout.tsx       # Root layout y configuración global
│  └─ page.tsx         # Página principal de la landing
│
├─ components/         # Componentes reutilizables y de UI
│  ├─ header.tsx       # Header principal con navegación y toggles
│  ├─ sections/        # Secciones de la landing (hero, servicios, etc.)
│  ├─ layout/          # Componentes de layout (Container, Section, Footer, Navbar...)
│  └─ ui/              # Componentes UI (botones, inputs, etc. - shadcn/ui)
│
├─ data/               # Datos estáticos usados en la landing
│  ├─ services.ts      # Lista de servicios
│  ├─ benefits.ts      # Beneficios/diferenciadores
│  ├─ process.ts       # Pasos del proceso de trabajo
│  ├─ portfolio.ts     # Proyectos/portfolio
│  └─ testimonials.ts  # Testimonios de clientes
│
├─ public/             # Recursos estáticos (imágenes, favicons, etc.)
│
├─ package.json        # Dependencias y scripts del proyecto
├─ tsconfig.json       # Configuración de TypeScript
├─ tailwind.config.*   # Configuración de Tailwind CSS
├─ postcss.config.*    # Configuración de PostCSS
└─ README.md           # Este archivo
```

---

## 🔧 Requisitos previos

- **Node.js** >= 18 (idealmente la versión LTS más reciente)
- **npm** (incluido con Node.js)
- Cuenta en **GitHub** (opcional, para despliegue y control de versiones)

Comprueba versiones:

```bash
node -v
npm -v
```

---

## 🛠 Instalación y ejecución en local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/TU_USUARIO/meetapi.git
   cd meetapi
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador:

   ```text
   http://localhost:3000
   ```

---

## 📜 Scripts disponibles

Desde la raíz del proyecto:

- **`npm run dev`** – Arranca el servidor de desarrollo en `http://localhost:3000`.
- **`npm run build`** – Genera el build de producción.
- **`npm run start`** – Levanta el servidor con el build de producción.
- **`npm run lint`** – Ejecuta las reglas de ESLint (si están configuradas).

---

## 🌐 Configuración de entorno

Este proyecto, en su versión de landing, no requiere variables de entorno sensibles para funcionar en local.

Si en el futuro se integran servicios externos (APIs, analítica, CRM, etc.), se recomienda usar variables en `.env.local` siguiendo la convención de Next.js:

```bash
NEXT_PUBLIC_ANALYTICS_ID="..."
API_BASE_URL="..."
```

> **Importante:** Nunca subir archivos `.env*` al repositorio público.

---

## 🚢 Despliegue

El proyecto puede desplegarse fácilmente en plataformas como:

- **Vercel** (recomendado para Next.js)
- Netlify
- Render

Pasos generales para Vercel:

1. Subir el proyecto a GitHub.
2. Crear un nuevo proyecto en [Vercel](https://vercel.com/) y conectar el repositorio.
3. Vercel detectará automáticamente Next.js y usará:
   - Comando de build: `npm run build`
   - Directorio de salida: `.next`
4. Configurar (si aplica) variables de entorno en Vercel.

---

## 🧱 Estilo de código y buenas prácticas

- Uso de **TypeScript** para tipado estático.
- Componentes **funcionales** con React Hooks.
- Estilos con **Tailwind CSS** + utilidades de diseño de shadcn/ui.
- Separación entre **layout**, **secciones** y **datos** (`components/` vs `data/`).
- Textos y contenido preparados para localización (multi-idioma) y edición futura.

---

## ✅ Estado actual

- Estructura base de la landing implementada.
- Componentes principales creados (header, secciones clave, layout).
- Dependencias configuradas para trabajar con Next.js, Tailwind y la librería de componentes UI.

Próximos pasos habituales:

- Conectar el formulario de contacto a un backend, CRM o servicio de email.
- Añadir analítica (Google Analytics, Plausible, etc.).
- Ajustar contenido y textos finales según la estrategia comercial de MeetAPI.

---

## 📄 Licencia

Este proyecto es de uso privado para la empresa **MeetAPI**. Adapta esta sección si decides open-sourcear el repositorio (por ejemplo, añadiendo una licencia MIT).