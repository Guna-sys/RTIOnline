import React from "react";
import Header from "../components/Header";
import "../style.css";

function RequestDetails() {
  return (
    <div>
      <Header /> 
      <form className="two-column-form">
      <div className="mandatory-strip">
        <span className="text">Fields prefixed with <span className="required">*</span>{" "}are mandatory</span>
      </div>
        <div className="form-row">
          <div className="form-label">Registration No. (নিবন্ধন নম্বর):</div>
          <span>GORAG/A/2024 | <a href="#">View RTI Request Details</a> || <a href="#">View Appeal Details</a></span>
        </div>

        <div className="form-row">
          <div className="form-label">Appeal is received by (আপীল প্রাপ্তির মাধ্যম):</div>
          <span>Online Receipt</span>
        </div>

        <div className="form-row">
          <div className="form-label">Date of Receipt (প্রাপ্তির তারিখ):</div>
          <span>01/12/2024</span>
        </div>

        <div className="form-row">
          <div className="form-label">Name (নাম):</div>
          <input type="text" defaultValue="XXXX XXXX" />
        </div>

        <div className="form-row">
          <div className="form-label">Gender (লিঙ্গ):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Address (ঠিকানা):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Pincode (পিনকোড):</div>
          <input type="text" defaultValue="799114" />
        </div>

        <div className="form-row">
          <div className="form-label">Phone No (ফোন নম্বর):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Mobile No (মোবাইল নম্বর):</div>
          <input type="text" defaultValue="+91" />
        </div>

        <div className="form-row">
          <div className="form-label">Email Address (ইমেইল ঠিকানা):</div>
          <input type="email" />
        </div>

        <div className="form-row">
          <div className="form-label">State (রাজ্য):</div>
          <span>Tripura</span>
        </div>

        <div className="form-row">
          <div className="form-label">District (জেলা):</div>
          <span>No District</span>
        </div>

        <div className="form-row">
          <div className="form-label">Country (দেশ):</div>
          <span>India</span>
        </div>

        <div className="form-row">
          <div className="form-label">RTI Request Registration No. (তথ্য অধিকার অনুরোধের রেজিস্ট্রেশন নম্বর):</div>
          <span>GORAG/R</span>
        </div>

        <div className="form-row">
          <div className="form-label">RTI Request Registration Date (তথ্য অধিকার অনুরোধের রেজিস্ট্রেশন তারিখ):</div>
          <span>01/12/2024</span>
        </div>

        <div className="form-row">
          <div className="form-label">Appeal Letter No. (আপীল পত্র নম্বর):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Appeal Letter Date (আপীল পত্রের তারিখ):</div>
          <input type="date" />
        </div>

        <div className="form-row">
          <div className="form-label">Citizenship Status (নাগরিকত্বের অবস্থা):</div>
          <input type="text" defaultValue="NRI Dual Citizenship" />
        </div>

        <div className="form-row">
          <div className="form-label">Is Appellant Below Poverty Line? (আপীলকারী গরীব সীমার নিচে?):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Amount (পরিমাণ):</div>
          <input type="number" defaultValue="0" />
        </div>

        <div className="form-row">
          <div className="form-label">Does it concern the Life or Liberty of a Person? (এই আবেদন ব্যক্তি জীবনের স্বাধীনতার সাথে সম্পর্কিত?):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Name of PIO (তথ্য প্রদানকারী অফিসারের নাম):</div>
          <input type="text" defaultValue="XXXX XXXX" />
        </div>

        <div className="form-row">
          <div className="form-label">PIO's Order/Decision No. (তথ্য প্রদানকারী অফিসারের আদেশ/সিদ্ধান্ত নম্বর):</div>
          <input type="text" />
        </div>

        <div className="form-row">
          <div className="form-label">Date of Receipt of PIO’s Order/Decision (তথ্য প্রদানকারী অফিসারের আদেশ/সিদ্ধান্ত প্রাপ্তির তারিখ):</div>
          <input type="date" />
        </div>

        <div className="form-row">
          <div className="form-label">Ground for Appeal (আপীলের কারণ):</div>
          <input type="text" defaultValue="No Response Within The Time Limit" />
          </div>

        <div className="form-row">
          <div className="form-label">Prayer or Relief Sought (আরজি বা প্রার্থনা):</div>
          <textarea defaultValue={`1) No Response Within the Time Limit?2) What are the qualifications required for Fertilizer License in Tripura?3) What is the procedure for issuing fertilizer license in Tripura?4) Total number of shops with...`} />
         
        </div>

        <div className="form-row">
          <div className="form-label">Reason for delay (if any) in filing this appeal (যদি কোন বিলম্ব থাকে তবে কারণ উল্লেখ করুন):</div>
          <textarea />
        </div>

        <div className="form-row">
            <div className="form-label">
                  * Please Select a Decision (একটি সিদ্ধান্ত নির্বাচন করুন):
             </div>
        <div className="form-input-cell">
              <div className="input-wrapper">
                  <select className="select-info" required>
                      <option value="">-- Select --</option>
                      <option value="dispose">APPEAL DISPOSE OF</option>
                  </select>
               </div>
            </div>
        </div>

        <div className="form-row">
             <div className="form-label">* Appellate Authority’s Decision (আপীল কর্তৃপক্ষের সিদ্ধান্ত):<br />
                (Maximum of 2000 Characters allowed)
             </div>
            <div className="form-input-cell">
               <div className="input-wrapper">
                <textarea className="text-info" rows="4" maxLength={2000} required/>
                </div>
            </div>
            </div>


        <div className="form-row">
          <div className="form-label">Upload Final Reply Document (চূড়ান্ত উত্তর আপলোড করুন):</div>
          <input type="file" />
        </div>

        <div className="center">
        <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RequestDetails;

