function UserProfile() 
{
    return (
        <div className="marginTopBottom">
            <div className="marginTopBottom header_Dialog">
                <span className="leftContent editFormText" id="editProfile_HeaderText">Register User</span>
                <a href="#" className="anchorBtn anchorBtnClose rightContent" id="editProfile_CloseForm"></a>
                <br className="clearBreak" />
            </div>

            <div className="marginTopBottom" style="padding-left:5px;padding-right:5px;">
                <table className="stdDisplayTable">
                    <tr>
                        <td>User Name:</td>
                        <td><input type="text" className="softInput" id="editProfile_userName" size="30" maxlength="50" /></td>
                        <td>
                            <a href="#" className="anchorBtn anchorBtnSteel" id="lnkSearchUserName"></a>
                            <a href="#" className="anchorBtn anchorBtnGreen" id="lnkRegisterUser">Register</a>
                            <a href="#" className="anchorBtn anchorBtnGreen" id="lnkUpdateProfile">Update</a>
                        </td>
                        <td id="editProfile_faceBook"></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" className="softInput" id="editProfile_password" size="20" maxlength="50" placeholder="password" /></td>
                        <td rowspan="2"><a href="#" className="anchorBtn anchorBtnGreen" id="lnkUpdatePassword">Change Password</a></td>
                    </tr>
                    <tr>
                        <td>Re-Enter:</td>
                        <td><input type="password" className="softInput" id="editProfile_passwordMatch" size="20" maxlength="50" placeholder="re-enter password" /></td>
                    </tr>
                </table>

                <table className="stdDisplayTable">
                    <tr>
                        <td>Are You A Robot?</td>
                    </tr>
                    <tr>
                        <td id="editProfile_captchaTest"></td>
                    </tr>
                    <tr>
                        <td>Enter The Text Above:</td>
                        <td><input type="text" className="softInput" id="editProfile_captchaValue" size="20" maxlength="20" /></td>
                    </tr>
                </table>

                <hr />

                <table className="stdDisplayTable">
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" className="softInput" id="editProfile_firstName" size="20" maxlength="40" /></td>
                        <td>Initial:</td>
                        <td><input type="text" className="softInput" id="editProfile_middleInitial" size="2" maxlength="2" /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" className="softInput" id="editProfile_lastName" size="20" maxlength="40" /></td>
                    </tr>
                    <tr>
                        <td>Date of Birth:</td>
                        <td><input type="date" className="softInput" id="editProfile_dateOfBirth" size="10" maxlength="10" /></td>
                    </tr>
                </table>

                <table className="stdDisplayTable">
                    <tr>
                        <td>e-Mail Address:</td>
                        <td><input type="text" className="softInput" id="editProfile_eMail" size="50" maxlength="255" placeholder="email address" /></td>
                    </tr>
                    <tr>
                        <td>Phone #:</td>
                        <td><input type="text" className="softInput" id="editProfile_phoneNumber" size="20" maxlength="20" placeholder="phone number" /></td>
                    </tr>
                </table>

                <table className="stdDisplayTable">
                    <tr>
                        <td>Address Type:</td>
                        <td id="editProfile_addressTypes"></td>
                    </tr>
                    <tr>
                        <td>Address 1:</td>
                        <td colspan="4"><input type="text" className="softInput" id="editProfile_address1" size="50" maxlength="255" /></td>
                    </tr>
                    <tr>
                        <td>Address 2:</td>
                        <td colspan="4"><input type="text" className="softInput" id="editProfile_address2" size="50" maxlength="255" /></td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td><input type="text" className="softInput" id="editProfile_city" size="30" maxlength="255" /></td>
                        <td>State:</td>
                        <td id="editProfile_states"></td>
                        <td>Postal Code:</td>
                        <td><input type="text" className="softInput" id="editProfile_postalCode" size="10" maxlength="10" /></td>
                    </tr>
                    <tr style="display:none">
                        <td>Country:</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default UserProfile;