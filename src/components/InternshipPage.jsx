import React from "react";
import "../css/internship.css";

function InternshipPage() {
  return (
    <>
      <div className="internship-container">
        <h1>INTERNSHIP</h1>
        <div className="form-container">
          <div className="form-item">
            <label>First Name*</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Last Name*</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Email*</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Phone*</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Position*</label>
            <select name="position" id="position">
              <option value="Web dev">Web dev</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>
          <div className="form-item-vertical">
            <label>You can join from (Days)*</label>
            <input type="text" />
          </div>
          <div className="form-item-vertical">
            <label>How much time can you give?</label>
            <input type="text" />
          </div>
          <div className="form-item-vertical">
            <label>Resume</label>
            <input type="file" />
          </div>
        </div>
        <div className="text-area">
          <textarea
            rows={10}
            placeholder="Please Write a Short Essay. Spelling Mistakes, Punctuation, Smilees
,Slang anything is cool with us. just tell us Something about you and
the things you Like ;-)"
          ></textarea>
        </div>
        <button className="internship-form-submit">Submit</button>
      </div>
    </>
  );
}

export default InternshipPage;
