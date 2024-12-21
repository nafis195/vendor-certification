from flask import Blueprint, jsonify, request
from app.models import Certification, User, Wishlist
from app.database import db

api = Blueprint('api', __name__)

@api.route('/certifications', methods=['GET'])
def get_certifications():
    certifications = Certification.query.all()
    return jsonify([{
        'id': c.id,
        'certification_name': c.certification_name,
        'short_name': c.short_name,
        'vendor': c.vendor,
        'level': c.level,
        'exam_code': c.exam_code,
        'background': c.background,
        'logoUrl': c.logoUrl
    } for c in certifications])

@api.route('/certification/<int:id>', methods=['GET'])
def get_certification(id):
    certification = Certification.query.get_or_404(id)
    return jsonify({
        'id': certification.id,
        'certification_name': certification.certification_name,
        'short_name': certification.short_name,
        'vendor': certification.vendor,
        'level': certification.level,
        'exam_code': certification.exam_code,
        'background': certification.background,
        'logoUrl': certification.logoUrl
    })

# Add more routes for user authentication, wishlist management, etc.
