import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State cho xác nhận mật khẩu

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu và Xác nhận mật khẩu không khớp!");
      return;
    }
    // Xử lý logic đăng ký tại đây
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Bên trái chứa form đăng ký */}
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">Tạo tài khoản</h2>
              <p className="card-title">Vui lòng nhập thông tin của bạn để tạo tài khoản</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName">Họ và Tên</label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleTogglePassword}
                      style={{ height: "100%" }}
                    >
                      <i
                        className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleToggleConfirmPassword}
                      style={{ height: "100%" }}
                    >
                      <i
                        className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Đăng ký
                </button>
              </form>
              <div className="login-link">
                <span>Đã có tài khoản? </span>
                <Link to="/login">Đăng nhập</Link>
              </div>
            </div>
          </div>

          {/* Bên phải chứa ảnh */}
          <div className="col-md-6 bg-image"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;