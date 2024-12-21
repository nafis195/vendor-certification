from app.database import db

class Certification(db.Model):
    __tablename__ = 'certifications'
    id = db.Column(db.Integer, primary_key=True)
    certification_name = db.Column(db.String(255), nullable=False)
    short_name = db.Column(db.String(50), nullable=False)
    vendor = db.Column(db.String(100), nullable=False)
    level = db.Column(db.String(50))
    exam_code = db.Column(db.String(50))
    background = db.Column(db.Text)
    logoUrl = db.Column(db.String(255))

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

class Wishlist(db.Model):
    __tablename__ = 'wishlist'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    certification_id = db.Column(db.Integer, db.ForeignKey('certifications.id'), nullable=False)
