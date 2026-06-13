# 📝 Todo List Application

A modern, feature-rich todo list application built with vanilla HTML, CSS, and JavaScript with full local storage functionality.

## ✨ Features

- ✅ **Add Tasks** - Easily add new tasks with keyboard support (Enter key)
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- ✔️ **Mark Complete** - Check off tasks as you complete them
- 🗑️ **Delete Tasks** - Remove individual tasks
- 📊 **Statistics** - Track total, completed, and remaining tasks
- 💾 **Local Storage** - All tasks are automatically saved to your browser
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Smooth Animations** - Beautiful transitions and effects
- 🎨 **Modern UI** - Clean and intuitive interface

## 🚀 Quick Start

### Online
1. Open `index.html` in your browser
2. Start adding tasks!

### Locally
```bash
# Navigate to the todo-app folder
cd todo-app

# Open in browser
open index.html
# or
firefox index.html
# or use a local server:
python -m http.server 8000
```

## 📁 Project Structure

```
todo-app/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎯 How It Works

### Adding Tasks
1. Type your task in the input field
2. Click "Add" button or press Enter
3. Task appears in the list

### Managing Tasks
- **Check/Uncheck** - Click the checkbox to mark tasks complete
- **Delete** - Click the trash icon to remove a task
- **Filter** - Use the filter buttons to view specific tasks
- **Clear Completed** - Remove all completed tasks at once
- **Clear All** - Delete all tasks (requires confirmation)

### Local Storage
- All tasks are automatically saved to your browser's local storage
- Tasks persist even after closing and reopening the browser
- Data is stored locally - no server connection needed

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6** - Object-oriented programming with classes
- **Local Storage API** - Client-side data persistence

## 📊 Statistics

The app tracks:
- **Total Tasks** - All tasks in the list
- **Completed** - Tasks marked as done (green)
- **Remaining** - Tasks still to do (orange)

## 🎨 Customization

### Change Colors
Edit the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Font
Change the font-family in `styles.css`:
```css
font-family: 'Your Font Name', sans-serif;
```

## 📱 Responsive Breakpoints

- Desktop: Full layout
- Tablet (max-width: 600px): Adjusted padding and flex layout
- Mobile (max-width: 400px): Compact layout

## 🔒 Data Privacy

- All data is stored locally in your browser
- No data is sent to any server
- Data persists in localStorage until manually cleared
- Clearing browser data will clear tasks

## 🚀 Future Enhancements

- [ ] Priority levels (High, Medium, Low)
- [ ] Due dates for tasks
- [ ] Categories/Tags
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Export/Import tasks
- [ ] Drag and drop reordering
- [ ] Cloud sync with login
- [ ] Recurring tasks
- [ ] Task notes/descriptions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None currently. Please report any bugs you find!

## 📄 License

Free to use and modify for personal and educational purposes.

## 💬 Feedback

Feel free to customize and improve this application!

---

**Made with 💜 for productivity lovers**

© 2026 Todo List App. All Rights Reserved.