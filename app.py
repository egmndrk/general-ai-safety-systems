# app.py
from flask import Flask, render_template, send_from_directory, abort, redirect
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
            "title": "Report 1 - Project Idea Report",
            "filename": "FKR-ProjectIdea.pdf",
            "description": "Introduction and project overview."
        },
        {
            "title": "Report 2 - Project Specification Report",
            "filename": "ProjectSpecificationsReport.pdf",
            "description": "Architectural Design and Workflow."
        },
        {
            "title": "Report 3 - Analysis Report",
            "filename": "Analysis_Report_for_General_AI_Safety_Systems.pdf",
            "description": "Comprehensive examination of current and proposed safety systems for school transportation, addressing limitations and introducing AI-driven solutions."
        },
        {
            "title": "Report 4 - High-Level Design Report",
            "filename": "High-LevelDesignReport.pdf",
            "description": "Detailed architectural breakdown and system-level design for AI safety systems in school transportation."
        },
        {
            "title": "Report 5 - Low-Level Design Report",
            "filename": "Low-LevelDesignReport.pdf",
            "description": "In-depth component-level design including data structures, algorithms, and communication flows."
        },
        {
            "title": "Report 6 - Test Plan Report",
            "filename": "TestPlanReport.pdf",
            "description": "Testing strategy, test cases, and validation methods for system components and overall functionality."
        },
        {
            "title": "Report 7 - Multidisciplinary Delivery Assessment",
            "filename": "MultidisciplinaryDeliveryAssessment.pdf",
            "description": "Evaluation of interdisciplinary collaboration and integration across engineering, design, and ethical domains."
        },
        {
            "title": "Report 8 - Final Report",
            "filename": "FinalReport_General_AI.pdf",
            "description": "Complete summary covering system conception, design, testing, deployment, ethical implications, and future directions."
        }
    ]


    @app.route('/', methods=["GET", "POST"])
    def index():
        return render_template('index.html', pdfs=pdf_files, project_name="General AI Safety Systems")

    @app.route('/pdf/<filename>', methods=["GET", "POST"])
    def serve_pdf(filename):
        try:
            # Security check to prevent directory traversal
            if '..' in filename or filename.startswith('/'):
                abort(404)
                
            pdf_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            if not os.path.isfile(pdf_path):
                # Return a "PDF not found" page or redirect
                return render_template('index.html', pdfs=pdf_files, 
                                     project_name="General AI Safety Systems", 
                                     error=f"PDF file '{filename}' not found")
                                     
            return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
        except Exception as e:
            app.logger.error(f"Error serving PDF {filename}: {str(e)}")
            abort(500)
    
    @app.route('/github')
    def github():
        # Redirect to GitHub repository
        return redirect('https://github.com/egmndrk/general-ai-safety-systems')
    
    @app.route('/twitter')
    def twitter():
        # Show coming soon page
        return render_template('coming_soon.html', project_name="General AI Safety Systems")
    
    @app.route('/linkedin')
    def linkedin():
        # Show coming soon page
        return render_template('coming_soon.html', project_name="General AI Safety Systems")
    
    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('index.html', pdfs=pdf_files, 
                             project_name="General AI Safety Systems", 
                             error="Page not found"), 404
                             
    @app.errorhandler(500)
    def server_error(e):
        return render_template('index.html', pdfs=pdf_files, 
                             project_name="General AI Safety Systems", 
                             error="Server error occurred"), 500
                             
    return app

