<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="orderstyle.css">

</head>
<body>
	<div class="header">
		<h3>Please provide some basic information so we can help you select an appropriate service package</h3>
	</div>
	<div class="frame">
		<div class="message-box" id="services">
			<h4>When will you require services?</h4>
			<input type="radio" id="immediately" name="order_select" value="immediately">
			<label for="immediately">Immediately - My loved one has passed</label><br>
			<input type="radio" id="thirty" name="order_select" value="thirty">
			<label for="thirty">My loved one is expected to pass in the next 30 days</label><br>
			<input type="radio" id="preplan" name="order_select" value="preplan">
			<label for="preplan">I am pre-planning for the future</label><br><br>
			<a class="btn btn-primary" id="continue">Continue</a>
		</div>

		<div class="message-box" id="urns">
			<h4>Select an urn by clicking an image below</h4>
			<div class="urn-list">
		<?php
			$servername = "my05.winhost.com";
			$username = "precious";
			$password = "Pr3c!ous";
			$dbname = "mysql_142029_pe";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
			  die("Connection failed: " . $conn->connect_error);
			}

			$sql = "SELECT * FROM mysql_142029_pe.urns";
			$result = $conn->query($sql);
			$rowNumber = 0;

			if ($result->num_rows > 0) {
			  // output data of each row
			  while($row = $result->fetch_assoc()) {
			  	if($rowNumber % 3 == 0) {?>
			  		<div class="urn-row">
			  	<?php
			  	}
			  ?>
			  	<div class="urn">
			  		<img class="urn-card<?php if($rowNumber==0){echo " selected";}?>" src="images\<?php echo $row["imageURL"]?>" alt="<?php echo $row["urnName"]?>"
			  		data-name="<?php echo $row["urnName"]?>"
			  		data-price="$<?php echo $row["price"]?>"
			  		data-desc="<?php echo $row["description"]?>">
			  		<div class="urn-name"><?php echo $row["urnName"]?></div>
			  		<div class="price">$<?php echo $row["price"]?></div>
			  	</div>
			  <?php
			  if($rowNumber % 3 == 2) {?>
			  	</div>
			  <?php 
				}
				$rowNumber++;
			  }
			} else {
			  echo "0 results";
			}
			if($rowNumber %3 != 0) {
				echo "</div>";
			}
			$conn->close();
		?>
			</div>
		</div>
		<div class="message-box" id="keepsakes">
			<h4>Select a keepsake or service item by clicking an image below</h4>
			<h5>You may select multiple items.</h5>
			<div class="urn-row">
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Sterling_Silver_Oval_Pendant1.jpg" alt="Legacytouch Oval Pendant">
					<div class="keepsake-name">Legacytouch Oval Pendant</div>
					<div class="keepsake-price">$240</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Sterling_Silver_Offset_Heart_Pendant.jpg" alt="Legacytouch Offset Heart Pendant">
					<div class="keepsake-name">Legacytouch Offset Heart Pendant</div>
					<div class="keepsake-price">$240</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Sterling_Silver_Vertical_Flat_Bar_Pendant2.jpg" alt="Legacytouch Flat Pendant">
					<div class="keepsake-name">Legacytouch Flat Pendant</div>
					<div class="keepsake-price">$195</div>
				</div>
			</div>
			<div class="urn-row">
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Classic_Style_Cremation_Urn_in_Black_Keepsake_B-1541-K-NB-Black.jpg" alt="Classic Style Cremation Urn in Black - Keepsake (B-1541-K-NB-Black)">
					<div class="keepsake-name">Classic Style Cremation Urn in Black - Keepsake (B-1541-K-NB-Black)</div>
					<div class="keepsake-price">$45</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Mother_of_Pearl_Cremation_Urn_in_Golden_Brass_Keepsake_B-1518-K-B.jpg" alt="Mother of Pearl Cremation Urn in Golden Brass - Keepsake (B-1518-K-B)">
					<div class="keepsake-name">Mother of Pearl Cremation Urn in Golden Brass - Keepsake (B-1518-K-B)</div>
					<div class="keepsake-price">$45</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Brass_Cremation_Urn_with_Flowers_Keepsake_B-1500-K-NB-Purple.jpg" alt="Brass Cremation Urn with Flowers - Keepsake (B-1500-K-NB-Purple)">
					<div class="keepsake-name">Brass Cremation Urn with Flowers - Keepsake (B-1500-K-NB-Purple)</div>
					<div class="keepsake-price">$45</div>
				</div>
			</div>
			<div class="urn-row">
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Elegant_White_Enamel_and_Nickel_Cremation_Urn_Keepsake_B-1528-K-W-NB.jpg" alt="Elegant White Enamel and Nickel Cremation Urn Keepsake (B-1528-K-W-NB)">
					<div class="keepsake-name">Elegant White Enamel and Nickel Cremation Urn Keepsake (B-1528-K-W-NB)</div>
					<div class="keepsake-price">$45</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Classic_Brass_Cremation_Urn_in_Blue_with_Brass_Bands_Keepsake_B-2291-K.jpg" alt="Classic Brass Cremation Urn in Blue with Brass Bands - Keepsake (B-2291-K)">
					<div class="keepsake-name">Classic Brass Cremation Urn in Blue with Brass Bands - Keepsake (B-2291-K)</div>
					<div class="keepsake-price">$45</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Black_and_Golden_Brass_Hand_Etched_Cremation_Urn_Keepsake_B-1570-K-NB.jpg" alt="Black and Golden Brass Hand-Etched Cremation Urn - Keepsake (B-1570-K-NB)">
					<div class="keepsake-name">Black and Golden Brass Hand-Etched Cremation Urn - Keepsake (B-1570-K-NB)</div>
					<div class="keepsake-price">$45</div>
				</div>
			</div>
			<div class="urn-row">
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Key_Black_Glass_Insert_Keepsake_(J-168).jpg" alt="Key Glass Insert Keepsake (J-168)">
					<div class="keepsake-name">Key Glass Insert Keepsake (J-168)</div>
					<div class="keepsake-price">$45</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Birthstone_Bar_January_Garnet_J-083.jpg" alt="Birthstone Pendant (J-083)">
					<div class="keepsake-name">Birthstone Pendant (J-083)</div>
					<div class="keepsake-price">$75</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Stainless_Steel_Cremation_Urn_Pendant_Cylinder_J-007.jpg" alt="Stainless Steel Cremation Urn Pendant - Cylinder (J-007)">
					<div class="keepsake-name">Stainless Steel Cremation Urn Pendant - Cylinder (J-007)</div>
					<div class="keepsake-price">$75</div>
				</div>
			</div>
			<div class="urn-row">
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Stainless_Steel_Cremation_Urn_Pendant_Jesus_on_Cross_J-009-S.jpg" alt="Stainless Steel Cremation Urn Pendant - Jesus on Cross (J-009-S)">
					<div class="keepsake-name">Stainless Steel Cremation Urn Pendant - Jesus on Cross (J-009-S)</div>
					<div class="keepsake-price">$65</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Stainless_Steel_Cremation_Urn_Pendant_-_Heart_-_Always_in_My_Heart_(J-006).jpg" alt="Stainless Steel Cremation Urn Pendant - Heart - Always in My Heart (J-006)">
					<div class="keepsake-name">Stainless Steel Cremation Urn Pendant - Heart - Always in My Heart (J-006)</div>
					<div class="keepsake-price">$65</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Silver_Stainless_Steel_Cremation_Urn_Pendant_with_Cord_Heart_v2.jpg" alt="Stainless Steel Cremation Urn Pendant with Cord – Heart">
					<div class="keepsake-name">Stainless Steel Cremation Urn Pendant with Cord – Heart</div>
					<div class="keepsake-price">$60</div>
				</div>
			</div>
			<div class="urn-row">
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Stainless_Steel_Cremation_Urn_Pendant_Heart_with_Little_Hearts_J-008.jpg" alt="Stainless Steel Cremation Urn Pendant - Heart with Little Hearts (J-008)">
					<div class="keepsake-name">Stainless Steel Cremation Urn Pendant - Heart with Little Hearts (J-008)</div>
					<div class="keepsake-price">$55</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Cremation_Urn_Pendant_with_Small_Golden_Heart_Stainless_Steel_J-017.jpg" alt="Cremation Urn Pendant with Small Golden Heart - Stainless Steel (J-017)">
					<div class="keepsake-name">Cremation Urn Pendant with Small Golden Heart - Stainless Steel (J-017)</div>
					<div class="keepsake-price">$55</div>
				</div>
				<div class="keepsake">
					<img class="keepsake-card" src="images\Keepsakes\Stainless_Steel_Cremation_Urn_Pendant_with_Chain_US_Air_Force_J-961.jpg" alt="Stainless Steel Cremation Urn Pendant with Chain - US Services (J-961)">
					<div class="keepsake-name">Stainless Steel Cremation Urn Pendant with Chain - US Services (J-961)</div>
					<div class="keepsake-price">$45</div>
				</div>
			</div>
		</div>

		<div id="right-pane">
			<div class="message-box" id="urn-info">
				<div id="chosen-name">B-2480-A-Metallic Urn</div>
				<div id="chosen-price">$150</div>
				<div><img id="chosen-image" src="images\B-2480-A_Metallic_Blue_Urn.jpg" alt="B-2480-A-Metallic Urn"></div>
				<a class="btn btn-primary" id="select-urn">SELECT</a>
				<div id="urn-colors">
					<img class="urn-color" src="images\B-2480-A_Metallic_Blue_Urn.jpg" alt="Alternate Color">
					<img class="urn-color" src="images\B-2480-A_Metallic_Pink_Urn.jpg" alt="Alternate Color">
					<img class="urn-color" src="images\B-2480-A_Brass_Cremation_Urn_Metallic_Purple.jpg" alt="Alternate Color">
				</div>
				<div id="chosen-desc">Classic Brass Cremation Urn with Three Rings. Threaded lid allows secure closure. Felt-lined base.</div>
			</div>

			<div class="message-box" id="keepsake-info">
				<div id="keepsake-name">Legacytouch Oval Pendant</div>
				<div id="keepsake-price">$240</div>
				<div><img id="keepsake-image" src="images\Keepsakes\Sterling_Silver_Oval_Pendant1.jpg" alt="Legacytouch Oval Pendant"></div>
				<label for="qty" class="qty-label">Quantity:</label>
					<div class="quantity">
						<div class="minusBtn"><i class="fas fa-minus">-</i></div>
						<input type="text" id="qty" name="quantity" min="1" max="50" step="1" class="quantity-control" value="1">
						<div class="plusBtn"><i class="fas fa-plus">+</i></div>
				</div>
				<a class="btn btn-primary" id="select-keepsake">SELECT</a>
			</div>
			<div id="selected-urn" class="message-box"></div>
			<div id="keepsake-list" class="message-box"></div>
			<a class="btn btn-primary" id="complete-order">COMPLETE</a>
			<div id="final-order" class="message-box">
			</div>
			<a class="btn btn-primary" id="confirm-order">CONFIRM</a>
		</div>
	</div>
</div>
</body>
<script src="orderscript.js"></script>
</html>