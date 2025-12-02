# CodeLearn - Front-End Learning Platform

A comprehensive, interactive web application designed to teach HTML, CSS, and JavaScript through structured courses, interactive flashcards, mini games, and progress tracking. Built with React 19 and modern web technologies.

> ⚠️ **IMPORTANT**: This repository is made public for **portfolio and demonstration purposes only**. All rights reserved. Viewing the code is permitted, but **any use, reproduction, modification, or distribution of this code is strictly prohibited**. See [LICENSE](LICENSE) for details.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.9.6-CA4245?logo=react-router)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)

## 🚀 Features

### 📚 **Interactive Courses**
- Comprehensive HTML, CSS, and JavaScript courses
- Structured lessons with step-by-step content
- Interactive quizzes with instant feedback
- Score tracking and progress monitoring

### 🎴 **Flashcards**
- 3D flip animations for engaging learning
- Organized by topic (HTML, CSS, JavaScript)
- Interactive card-based interface

### 🎮 **Mini Games**
- **Bug Fix Challenge**: Identify and fix bugs in code snippets
- **Typing Speed Test**: Improve coding speed and accuracy
- Real-time scoring and feedback

### 📊 **Progress Tracking**
- Personalized dashboard showing quiz scores
- Track progress across HTML, CSS, and JavaScript
- Persistent data storage using localStorage

### 🔐 **User Authentication**
- Login and Sign Up functionality
- Protected routes based on authentication status
- User session management
- **Note**: This is a mock authentication system for demonstration purposes only. Do not use real credentials.

### 🎨 **Modern UI/UX**
- Responsive design for all screen sizes
- Smooth animations and transitions
- Toast notifications for user feedback
- Professional color scheme and typography
- Card-based layouts with modern styling

## 🛠️ Technologies Used

### Core Technologies
- **React 19.2** - Modern React with latest features
- **React Router DOM v7** - Client-side routing and navigation
- **Vite 7.2** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

### React Hooks & Patterns
- `useState` - Component state management
- `useEffect` - Side effects and lifecycle management
- `useContext` - Global state management via Context API
- `useNavigate` - Programmatic navigation
- `useLocation` - Route location tracking
- `useRef` - DOM references and previous value tracking

### State Management
- **React Context API** - Global state for user data and quiz scores
- **localStorage** - Client-side data persistence
- Synchronized state management between Context and localStorage

### UI Libraries
- **react-toastify** - Toast notifications for user feedback
- **Custom CSS** - Modern styling with CSS Grid, Flexbox, and animations

## 📁 Project Structure

```
capstone-project/
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/            # React Context providers
│   │   └── ProgressContext.jsx
│   ├── layouts/             # Layout components
│   │   └── RootLayout.jsx
│   ├── pages/               # Page components
│   │   ├── home/           # Homepage
│   │   ├── courses/        # Course pages and quizzes
│   │   ├── flashCards/     # Flashcard components
│   │   ├── miniGames/      # Mini game components
│   │   ├── progress/       # Progress tracking page
│   │   ├── LoginSignUp/    # Authentication page
│   │   └── about/          # About page
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🚦 Getting Started

> **Note**: This section is for reference only. This code is not licensed for use. See [LICENSE](LICENSE) for restrictions.

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

### Installation (Reference Only)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/capstone-project.git
   cd capstone-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎯 Usage

### First Time Setup

1. **Sign Up**: Create an account with a username (min. 11 characters), email, and password (min. 11 characters)
2. **Login**: Use your credentials to access the full application
3. **Explore**: Navigate through courses, flashcards, and mini games
4. **Track Progress**: View your quiz scores on the Progress page

### Navigation

- **Home**: Landing page with course and game cards
- **Courses**: Access HTML, CSS, and JavaScript courses with quizzes
- **Flash Cards**: Interactive flashcards for quick review
- **Mini Games**: Play educational coding games
- **Progress**: View your quiz scores and learning progress
- **About**: Learn more about the project

## 🔒 Security Note

**Important**: This application uses mock authentication for demonstration purposes. Passwords are stored in plain text in localStorage. **Do not use real passwords or sensitive information**. This is a portfolio project and not intended for production use.

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Modern Styling**: Gradient backgrounds, card-based layouts, smooth shadows
- **Animations**: CSS transitions and animations for enhanced user experience
- **Color Scheme**: Professional blue and green color palette
- **Typography**: Clean, readable fonts with proper hierarchy

## 📝 Key Implementation Details

### Routing
- Nested routes for courses and mini games
- Protected routes based on authentication status
- Programmatic navigation using `useNavigate`

### State Management
- Context API for global state (user data, quiz scores)
- localStorage for data persistence across sessions
- Synchronized state updates between Context and localStorage

### Form Handling
- Controlled components for all form inputs
- Input validation with user-friendly error messages
- Toast notifications for feedback

### Data Persistence
- User data and quiz scores saved to localStorage
- Automatic data loading on application mount
- Error handling for corrupted localStorage data

## 📄 License

**All Rights Reserved**

This project and its source code are proprietary and confidential. This repository is made public for portfolio and demonstration purposes only.

**You may NOT:**
- Use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this code
- Use this code for any commercial or non-commercial purpose
- Create derivative works based on this code

Viewing the code is permitted, but any use, reproduction, or distribution is strictly prohibited.

For permission requests, please contact the author. See [LICENSE](LICENSE) for full details.

## 👤 Author

**Ali Rasouli**
- GitHub: [@AliRasouli2000](https://github.com/AliRasouli2000)


## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast development experience
- All open-source contributors whose libraries made this project possible

## 📧 Contact

For questions or feedback, please open an issue on GitHub or contact me directly.

---

**Built with ❤️ using React and modern web technologies**
