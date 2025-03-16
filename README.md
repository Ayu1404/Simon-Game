# **Simon Game**

A fun and interactive memory game inspired by the classic Simon Game. Challenge yourself to remember and replicate a growing sequence of colors and sounds. Perfect for players of all ages to test and improve their memory skills.

---

## **Features**
- **Dynamic Gameplay**:
  - Watch the sequence of colors flash on the screen.
  - Repeat the sequence by clicking the colors in the correct order.
  - Each round increases the length of the sequence, making it progressively harder.
- **Interactive Design**:
  - A responsive interface with color-coded buttons for immersive gameplay.
  - Mobile-friendly with a "Start" button for touchscreen compatibility.
- **Score Tracking**:
  - Displays the current score and tracks the highest score for the session.
- **Custom Sounds**:
  - Each button emits a distinct sound when clicked, enhancing the gameplay experience.
- **Instructions**:
  - Simple and clear on-screen instructions to guide new players.

---

## **How to Play**
1. Press any key or click the **Start** button to begin.
2. Watch as a sequence of colors is displayed.
3. Repeat the sequence by clicking the buttons in the correct order.
4. The sequence gets longer with each round—keep up for as long as you can!
5. Aim to beat your highest score!

---

## **Technologies Used**
- **HTML5**: For structuring the game layout and components.
- **CSS3**:
  - Styled the game interface for responsiveness and visual appeal.
  - Incorporated animations for smooth transitions.
- **JavaScript/jQuery**:
  - Implemented the game logic and button interactivity.
  - Managed sequences, user input, and score tracking.
- **Google Fonts**: For a retro-style font, enhancing the game's aesthetic.

---

## **Getting Started**

### **Prerequisites**
- A modern web browser with JavaScript enabled.

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayu1404/Simon-Game.git
   cd Simon-Game
   ```

2. Open the **index.html** file in your browser to start playing:
   ```bash
   open index.html
   ```

---

## **Game Structure**
### **HTML**:
- The game interface includes:
  - **Title/Instructions**: Dynamic headers displaying the game status or instructions.
  - **Control Buttons**: Start button for mobile devices and a sound toggle button.
  - **Game Buttons**: Four color-coded buttons (green, red, yellow, and blue) forming the core gameplay.
  - **Score Display**: Tracks the current and highest score.

### **CSS**:
- Animates button presses and enhances the visual appeal of the game layout.
- Includes responsive design elements for better gameplay on mobile devices.

### **JavaScript**:
- **Sequence Management**:
  - Randomly generates and stores the sequence for each round.
  - Plays the sequence visually and audibly for the player.
- **User Interaction**:
  - Detects user input and checks against the sequence.
  - Ends the game if the user makes an incorrect input.
- **Score Management**:
  - Updates the score dynamically.
  - Tracks the highest score across game sessions.

---

## **Usage**
1. Launch the game in your browser by opening the **index.html** file.
2. Follow the on-screen instructions to begin playing.
3. Compete with friends or yourself to achieve the highest score!

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License, allowing you to modify and distribute the project with proper attribution.

---

## **Acknowledgments**
- Thanks to the original Simon Game for inspiring this version.
- Special thanks to open-source tools like jQuery and Google Fonts for enhancing the game’s design.
