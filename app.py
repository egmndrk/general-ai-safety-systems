# app.py
from flask import Flask, render_template, send_from_directory
import os

def create_app():
    app = Flask(__name__)

    # Configuration
    app.config['UPLOAD_FOLDER'] = 'static/pdfs'

    # Ensure the upload folder exists
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

    # Sample PDF information - replace with your actual PDF files
    pdf_files = [
        {
            "title": "Report 1 - Project Idea",
            "filename": "FKR-ProjectIdea.pdf",
            "description": "Introduction and project overview"
        },
        {
            "title": "Report 2 - Project Specification",
            "filename": "ProjectSpecificationsReport.pdf",
            "description": "Architectural Design and Workflow"
        },
        {
            "title": "Report 3 - Analysis",
            "filename": "Analysis_Report_for_General_AI_Safety_Systems.pdf",
            "description": "Comprehensive examination of current and proposed safety systems for school transportation, addressing limitations and introducing AI-driven solutions"
        },
        {
            "title": "Report 4 - High-Level Design Report",
            "filename": "High-LevelDesignReport.pdf",
            "description": "Detailed architectural breakdown and system-level design for AI safety systems in school transportation"
        }
    ]


    @app.route('/', methods=["GET", "POST"])
    def index():
        return render_template('index.html', pdfs=pdf_files, project_name="General AI Safety Systems")

    @app.route('/pdf/<filename>', methods=["GET", "POST"])
    def serve_pdf(filename):
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
    return app

