<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" type="text/css" href="registration.css">
    <style>

        .alert.alert-success{
            background-color: #45A049; 
            color: #fff; 
            padding: 0px;
            border: 5px solid transparent;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            margin-top: 1px;
            font-family: 'Source Sans Pro', sans-serif;
        }

        .alert.alert-success{
            font-weight: bold;
        }


        .alert.alert-success{
            font-weight: bold;
        }


        .alert.alert-danger {
            background-color: #A53F3F;
            color: #fff; 
            padding: 0px;
            border: 5px solid transparent;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            margin-top: 1px;
            font-family: 'Source Sans Pro', sans-serif;
            
        }
        
        .alert.alert-danger strong {
            font-weight: bold;
        }
        
       
        @keyframes fadeInOut {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        .alert.alert-danger.animated {
            animation: fadeInOut 5s ease-in-out;
        }
    </style>
    <script src="Scripts/registration.js" defer></script>
    <script src="Scripts/barangays.js" defer></script>

</head>
<body>
    <canvas id="canvas" width="100%" height="100%"></canvas>
    <div class="container mt-3">
    <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_POST["submit"])) {
    $errors = array();

    // Validate input fields
    $firstName = $_POST["FirstName"];
    $lastName = $_POST["LastName"];
    $email = $_POST["Email"];
    $subdivision = $_POST["State"]; // Capture subdivision
    $lot_block = $_POST["Locality"]; // Capture lot/block
    $street = $_POST["address"]; // Capture street
    $country = $_POST["Country"]; // Capture country

    // Check if Province is set
    $province = isset($_POST["Province"]) ? $_POST["Province"] : '';

    $barangay = $_POST["Barangay"]; // Capture barangay
    $cityMunicipal = $_POST["Municipal"]; // Capture city/municipal
    $countryCode = $_POST["CountryCode"]; // Capture country code
    $phone = $_POST["phone"]; // Capture phone number

    // Check if required fields are empty
    if (empty($country) || empty($province) || empty($barangay) || empty($cityMunicipal) || empty($countryCode)) {
        $errors[] = "<div class='alert alert-danger'>Please select all required fields.</div>";
    }

    // Validate other fields...

    // Check if email already exists
    require_once "database.php";
    $checkEmailQuery = "SELECT * FROM users WHERE email = ?";
    $stmt = mysqli_stmt_init($conn);
    if ($stmt && mysqli_stmt_prepare($stmt, $checkEmailQuery)) {
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        $numRows = mysqli_stmt_num_rows($stmt);
        if ($numRows > 0) {
            $errors[] = "<div class='alert alert-danger'>Email already exists.</div>";
        }
        mysqli_stmt_close($stmt);
    } else {
        $errors[] = "<div class='alert alert-danger'>Failed to check email existence: " . mysqli_error($conn) . "</div>";
    }

    // Check if passwords match
    $password = $_POST["password"];
    $repeatPassword = $_POST["cnfpassword"];
    if ($password !== $repeatPassword) {
        $errors[] = "<div class='alert alert-danger'>Passwords do not match.</div>";
    }

    // If no errors, proceed with registration
    if (empty($errors)) {
        // Insert new user record
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
        $insertQuery = "INSERT INTO users (First_Name, Last_Name, email, password, subdivision, lot_block, street, country, province, barangay, city_municipal, country_code, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_stmt_init($conn);
        if ($stmt && mysqli_stmt_prepare($stmt, $insertQuery)) {
            mysqli_stmt_bind_param($stmt, "sssssssssssss", $firstName, $lastName, $email, $passwordHash, $subdivision, $lot_block, $street, $country, $province, $barangay, $cityMunicipal, $countryCode, $phone);
            if (mysqli_stmt_execute($stmt)) {
                echo "<div class='alert alert-success'>You Are Registered Successfully!</div>";
                echo "<script>
                    setTimeout(function() {
                        window.location.href = 'Login.php';
                    }, 3000); // 3000 milliseconds = 3 seconds
                </script>";
            } else {
                $errors[] = "<div class='alert alert-danger'>Failed to execute statement: " . mysqli_stmt_error($stmt) . "</div>";
            }
            mysqli_stmt_close($stmt);
        } else {
            $errors[] = "<div class='alert alert-danger'>Failed to prepare statement: " . mysqli_error($conn) . "</div>";
        }
    }

    // Display errors
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo $error;
        }
    }
}
?>



    <form action="registration.php" method="POST" onsubmit="return validateForm()">
        <div class="row jumbotron box8">
            <div class="col-sm-12 mx-t3 mb-4">
            <h2 class="text-center text-info">Register</h2>
            </div>
            <div class="col-sm-6 form-group">
            <label for="name-f">First Name</label>
            <input type="text" class="form-control" name="FirstName" id="name-f" placeholder="Enter your first name." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="name-l">Last name</label>
            <input type="text" class="form-control" name="LastName" id="name-l" placeholder="Enter your last name." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="Email" id="email" placeholder="Enter your email." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="address-1">Lot/Blk</label>
            <input type="address" class="form-control" name="Locality" id="address-1" placeholder="Enter your address." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="address-2">Street</label>
            <input type="address" class="form-control" name="address" id="address-2" placeholder="Enter your street address." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="State">Phase/subdivision</label>
            <input type="address" class="form-control" name="State" id="State" placeholder="Enter your phase/subdivision." required>
            </div>

            <div class="col-sm-6 form-group">
                <label for="Country">Country</label>
                <select id="countrySelect" class="form-control custom-select browser-default" name="Country">
                  <option value=""selected>Select a Country</option>
                </select>
            </div>

            <div class="col-sm-6 form-group" id="provinceFormGroup" style="display: hide;">
              <label for="Province">Province</label>
              <select id="ProvinceSelect" class="form-control browser-default custom-select" name="Province"></select>
          </div>

          <div class="col-sm-6 form-group" id="barangayFormGroup" style="display: hide;">
            <label for="Barangay">Barangay</label>
            <select id="BarangaySelect" class="form-control browser-default custom-select" name="Barangay">
              <option value=""selected>Select a Province First.</option>
            </select>
        </div>

          <div class="col-sm-6 form-group">
            <label for="Municipal">City/Municipal</label>
            <select id="MunicipalSelect" class="form-control browser-default custom-select" name="Municipal">
                <option value=""selected></option>
            </select>
          </div>


          <div class="col-sm-4 form-group">
            <label for="cod">Country code</label>
            <select class="form-control browser-default custom-select" name="CountryCode">

              <option data-countryCode="" value="" selected>Select Country Code.</option>
          <option data-countryCode="PH" value="63">Philippines (+63)</option>
        </select>
    </div>
            <div class="col-sm-4 form-group">
            <label for="tel">Phone</label>
            <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Contact Number." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="pass">Password</label>
            <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password." required>
            </div>
            <div class="col-sm-6 form-group">
            <label for="pass2">Confirm Password</label>
            <input type="Password" name="cnfpassword" class="form-control" id="pass2" placeholder="Re-enter your password." required>
            </div>
            <br>
            <span>Already have an account? <a href="Login.php" style="color: #578fff;">Log in</a></span>

          </div>
          <div class="col-sm-12 form-group mb-0">
            <input type="submit" class="btn btn-primary" value="Register" name="submit">
          </div>

    
        </div>
        </form>
    </div>
</body>
</html>
