# HighlightChat Web Application

A web application companion for the HighlightChat Chrome Extension that provides PDF chat functionality with secure user authentication.

## Features

- **User Authentication**: Secure sign-in functionality for users
- **PDF Chat Interface**: Interactive chat interface for discussing PDF content
- **Responsive Design**: Full mobile and desktop compatibility
- **Chrome Extension Integration**: Seamless integration with the HighlightChat Chrome Extension

## Project Structure

The project is divided into two main parts:

### Frontend (`/Front-End`)
- Built with React + Vite
- Features modern UI components
- Protected routes for authenticated users
- Context-based state management
- Responsive design implementation

### Backend (`/Back-End`)
- Node.js server implementation
- Authentication endpoints
- PDF processing capabilities
- Secure API endpoints

## Pages

1. **Home Page**
   - Landing page with feature showcase
   - How it works section
   - Features overview
   - Try PDF demonstration

2. **Sign In Page**
   - User authentication
   - Secure login functionality
   - Integration with backend services

3. **PDF Chat Page**
   - Interactive PDF reader
   - Chat interface for PDF discussions
   - Real-time response system
   - Document analysis capabilities

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install Frontend dependencies
   cd Front-End
   npm install

   # Install Backend dependencies
   cd ../Back-End
   npm install
   ```

3. Set up environment variables:
   - Create `.env` in Front-End directory
   - Create `.env` in Back-End directory

4. Run the development servers:
   ```bash
   # Frontend
   cd Front-End
   npm run dev

   # Backend
   cd Back-End
   npm run dev
   ```

## Environment Variables

### Frontend
Required environment variables for the Frontend:
- `VITE_API_URL`: Backend API URL
- Additional configuration variables as needed

### Backend
Required environment variables for the Backend:
- Database connection strings
- Authentication secrets
- API keys
- Server configuration

## Technologies Used

- React.js
- Vite
- Node.js
- Express.js
- Authentication System
- PDF Processing Library
- Prisma
- Postgres DB
- SSO ( Google )
- Chrome-Extension

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is proprietary and confidential.

---

For more information about the Chrome Extension, please refer to the Chrome Extension repository.