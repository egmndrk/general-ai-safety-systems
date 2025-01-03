# General AI Safety Systems - Project Documentation Site

A clean and simple documentation website that hosts all reports and documents related to the General AI Safety Systems senior project. The website provides easy access to project documentation including project idea, specifications, analysis, and design reports.

🔗 **Live Website**: [general-ai-safety-systems.onrender.com](https://general-ai-safety-systems.onrender.com/)

## Available Documents

1. Project Idea Report
2. Project Specification Report
3. Analysis Report
4. High-Level Design Report

## Technologies Used

- **Backend:**
  - Flask
  - Python
  - Gunicorn

- **Frontend:**
  - HTML5
  - TailwindCSS
  - Responsive Design

## Project Structure

```
project-docs/
│
├── static/
│   └── pdfs/
│       └── [PDF documents]
│
├── templates/
│   └── index.html
│
├── app.py
└── requirements.txt
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/general-ai-safety-systems-docs.git
cd general-ai-safety-systems-docs
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
flask run
```

5. Visit `http://localhost:5000` in your browser

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Author

Egemen Doruk
