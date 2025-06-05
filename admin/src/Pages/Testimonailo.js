import React, { useEffect, useState } from 'react';

const AdminTestimonialPanel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    position: '',
    rating: 5,
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = () => {
    fetch('https://mern-portfolio-1-yadr.onrender.com/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `https://mern-portfolio-1-yadr.onrender.com/api/testimonials/${editingId}`
      : 'https://mern-portfolio-1-yadr.onrender.com/api/testimonials';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quote: formData.quote,
          author: formData.author,
          position: formData.position,
          rating: Number(formData.rating),
        }),
      });
      if (!res.ok) throw new Error('Failed to save testimonial');
      setFormData({ quote: '', author: '', position: '', rating: 5 });
      setEditingId(null);
      fetchTestimonials();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData({
      quote: testimonial.quote,
      author: testimonial.author,
      position: testimonial.position,
      rating: testimonial.rating,
    });
    setEditingId(testimonial._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const res = await fetch(`https://mern-portfolio-1-yadr.onrender.com/api/testimonials/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete testimonial');
      fetchTestimonials();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary fw-bold text-center">
        {editingId ? 'Edit Testimonial' : 'Add Testimonial'}
      </h2>

      <form onSubmit={handleSubmit} className="row g-3 mb-5">
        <div className="col-12">
          <label className="form-label fw-semibold">Quote</label>
          <textarea
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            className="form-control"
            required
            rows={3}
            placeholder="Enter testimonial quote"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Author name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Position or Role"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Rating (1 to 5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="form-control"
            required
          />
        </div>
        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {editingId ? 'Update' : 'Add'}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setEditingId(null);
                setFormData({ quote: '', author: '', position: '', rating: 5 });
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="mb-4 text-success text-center">Existing Testimonials</h3>
      <div className="row">
        {testimonials.map((t) => (
          <div key={t._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-primary">{t.author}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{t.position}</h6>
                  <p className="card-text text-secondary" style={{ fontSize: "0.95rem" }}>
                    {t.quote.length > 120 ? t.quote.slice(0, 120) + '...' : t.quote}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="badge bg-warning text-dark">Rating: {t.rating}/5</span>
                  <div>
                    <button className="btn btn-sm btn-outline-warning me-2" onClick={() => handleEdit(t)}>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(t._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <div className="col-12 text-center text-muted">No testimonials found.</div>
        )}
      </div>
    </div>
  );
};

export default AdminTestimonialPanel;
