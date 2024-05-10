import React from "react";
import "./enquiris.css";

function Enquiries() {
  return (
    <div className="enquirisPanel">
      <form action="" method="post">
        <div className="input-field">
          <label htmlFor="">Student Name</label>
          <div className="sName">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Frist Name*"
              className="txt-inputs"
              required
            />
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Last Name*"
              className="txt-inputs"
              required
            />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="">Address</label>
          <div className="address">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder=""
              className="txt-inputs fw"
              required
            />
            <div className="dist-state">
              <div className="inp">
                <label htmlFor="">Distic</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder=""
                  className="txt-inputs fw"
                  required
                />
              </div>
              <div className="inp">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder=""
                  className="txt-inputs fw"
                  required
                />
              </div>
            </div>
          </div>
          <div className="contact-number">
            <label htmlFor="">Contact Number</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder=""
              className="txt-inputs fw"
              required
            />
          </div>
          <div className="contact-number">
            <label htmlFor="">Course</label>
            <select name="course" id="course" className="txt-inputs">
                <option value="Fullstack">FullStack</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Mobile App Development">Mobile App Development</option>

            </select>
          </div>
          <div className="contact-number">
            <label htmlFor="">Fee</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder=""
              className="txt-inputs fw"
              required
            />
          </div>
        </div>
        <div className="submitBtn">
          <button type="submit" className="btn">Save</button>
          <button type="reset" className="btn">Reset All</button>
        </div>
      </form>
    </div>
  );
}

export default Enquiries;
