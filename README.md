# General AI Safety Systems

A comprehensive AI-driven safety system for modern transportation, featuring a beautifully designed web interface to access project documentation.

## Features

- **Modern User Interface**: Clean, responsive design with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Search Functionality**: Easily find specific documents
- **Animated Elements**: Smooth transitions and loading animations
- **Mobile Responsive**: Looks great on all devices

## Running the Application

1. **Setup a virtual environment**:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```
   python app.py
   ```

4. **Access the application**:
   Open your browser and navigate to `http://127.0.0.1:5000`

## Project Structure

- `app.py` - Flask application entry point
- `templates/` - HTML templates
- `static/` - CSS, JavaScript, and other static assets
  - `styles.css` - Custom styles
  - `script.js` - Interactive features
  - `logo.svg` - Project logo
  - `pdfs/` - PDF document storage

## Adding Documents

To add new PDF documents:
1. Place your PDF files in the `static/pdfs/` directory
2. Update the `pdf_files` list in `app.py` with your new document information

## Customization

- **Colors**: Edit the CSS variables in `static/styles.css`
- **Logo**: Replace `static/logo.svg` with your own logo
- **Content**: Modify the hero section text in `templates/index.html`

## Technologies Used

- Flask (Python web framework)
- Tailwind CSS
- JavaScript (ES6+)
- Font Awesome icons

## Available Documents

1. Project Idea Report
2. Project Specification Report
3. Analysis Report
4. High-Level Design Report
5. Low-Level Design Report
6. Test Plan Report
7. Multidisciplinary Delivery Assessment

## Author

- Egemen Doruk Serdar
- Mustafa Boğaç Morkoyun
- Ege İzmir
- Mustafa Pınarcı
