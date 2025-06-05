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

  // Fetch all testimonials
  const fetchTestimonials = () => {
    fetch('http://localhost:8080/api/testimonials')
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
      ? `http://localhost:8080/api/testimonials/${editingId}`
      : 'http://localhost:8080/api/testimonials';

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

      // Reset form and reload testimonials
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
      const res = await fetch(`http://localhost:8080/api/testimonials/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete testimonial');
      fetchTestimonials();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="admin-testimonial-panel container py-4">
      <h2 className="mb-4">{editingId ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label>Quote</label>
          <textarea
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            className="form-control"
            required
            rows={3}
          />
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Rating (1 to 5)</label>
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
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {editingId ? 'Update' : 'Add'}
        </button>
        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              setEditingId(null);
              setFormData({ quote: '', author: '', position: '', rating: 5 });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h3>Existing Testimonials</h3>
      <ul className="list-group">
        {testimonials.map((t) => (
          <li key={t._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{t.author}</strong> - <em>{t.position}</em>
              <br />
              <small>{t.quote}</small>
              <br />
              <small>Rating: {t.rating} / 5</small>
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(t)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTestimonialPanel;
