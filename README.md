# Pinterest Clone

A full-featured Pinterest clone web application built with Node.js, Express, and MongoDB. This application allows users to create accounts, discover content on a personalized feed, and manage their own profile.

![Pinterest Clone](https://via.placeholder.com/800x400?text=Pinterest+Clone)

## 📋 Features

- **User Authentication**
  - Register with email and password
  - Secure login/logout functionality
  - Protected routes for authenticated users

- **User Profile**
  - Customizable user profiles
  - View and edit personal information
  - Track and display user activity

- **Content Feed**
  - Personalized content feed
  - Discover new pins and boards
  - Infinite scrolling for seamless browsing

- **Responsive Design**
  - Mobile-friendly interface
  - Optimized for various screen sizes

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Local Strategy
- **View Engine**: EJS
- **Other Tools**: Express-session for session management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/pinterest-clone.git
   cd pinterest-clone
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/pinterest-clone
   SESSION_SECRET=your_secret_key
   ```

4. Start the application
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
pinterest-clone/
├── bin/
│   └── www             # Application entry point
├── models/             # Database models
├── public/             # Static files (CSS, JS, images)
├── routes/             # Route handlers
│   ├── auth.js         # Authentication routes
│   ├── index.js        # Main routes
│   ├── profile.js      # Profile routes
│   └── feed.js         # Feed routes
├── views/              # EJS templates
├── app.js              # Express app configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 💻 API Routes

### Authentication Routes
- `POST /auth/register` - Register a new user
- `POST /auth/login` - User login
- `GET /auth/logout` - User logout

### Profile Routes
- `GET /profile/:username` - View user profile
- `PUT /profile/:username` - Update user profile
- `DELETE /profile/:username` - Delete user account

### Feed Routes
- `GET /feed` - Get personalized feed
- `POST /pins` - Create a new pin
- `GET /pins/:id` - View specific pin

## 🧪 Testing

```bash
# Run tests
npm test
```

## 🔒 Security Features

- Password hashing using Passport-Local-Mongoose
- Session-based authentication
- CSRF protection
- HTTP-only cookies

## 🛣️ Roadmap

- [ ] Add image upload functionality
- [ ] Implement search functionality
- [ ] Add social sharing features
- [ ] Create board management system
- [ ] Add commenting functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Inspired by [Pinterest](https://www.pinterest.com/)
- Built with love for learning web development
