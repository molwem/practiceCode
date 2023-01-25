import "../CSS/nutritionLabel.css"

const NutritionLabel = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800"
        rel="stylesheet"
      />
      <section class="nutritionLabelBody">
        <div class="label">
          <header>
            <h1 class="bold">Nutrition Facts</h1>
            <div class="divider"></div>
            <p>8 servings per container</p>
            <p class="bold">
              Serving size <span>2/3 cup (55g)</span>
            </p>
          </header>
          <div class="divider large"></div>
          <div class="calories-info">
            <div class="left-container">
              <h2 class="bold small-text">Amount per serving</h2>
              <p>Calories</p>
            </div>
            <span class="right">230</span>
          </div>
          <div class="divider medium"></div>
          <div class="daily-value small-text">
            <p class="bold right no-divider">% Daily Value *</p>
            <div class="divider"></div>
            <p>
              <span>
                <span class="bold">Total Fat</span> 8g
              </span>{" "}
              <span class="bold right">10%</span>
            </p>
            <p class="indent no-divider">
              Saturated Fat 1g <span class="bold right">5%</span>
            </p>
            <div class="divider"></div>
            <p class="indent no-divider">
              <span>
                <i>Trans</i> Fat 0g
              </span>
            </p>
            <div class="divider"></div>
            <p>
              <span>
                <span class="bold">Cholesterol</span> 0mg
              </span>{" "}
              <span class="right bold">0%</span>
            </p>
            <p>
              <span>
                <span class="bold">Sodium</span> 160mg
              </span>{" "}
              <span class="right bold">7%</span>
            </p>
            <p>
              <span>
                <span class="bold">Total Carbohydrate</span> 37g
              </span>{" "}
              <span class="right bold">13%</span>
            </p>
            <p class="indent no-divider">Dietary Fiber 4g</p>
            <div class="divider"></div>
            <p class="indent no-divider">Total Sugars 12g</p>
            <div class="divider double-indent"></div>
            <p class="double-indent no-divider">
              Includes 10g Added Sugars <span class="right bold">20%</span>
            </p>
            <div class="divider"></div>
            <p class="no-divider">
              <span class="bold">Protein</span> 3g
            </p>
            <div class="divider large"></div>
            <p>
              Vitamin D 2mcg <span>10%</span>
            </p>
            <p>
              Calcium 260mg <span>20%</span>
            </p>
            <p>
              Iron 8mg <span>45%</span>
            </p>
            <p class="no-divider">
              Potassium 235mg <span>6%</span>
            </p>
          </div>
          <div class="divider medium"></div>
          <p class="note">
            * The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2,000 calories a day is used
            for general nutrition advice.
          </p>
        </div>
      </section>
    </>
  );
};

export default NutritionLabel;
