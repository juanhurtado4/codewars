import UIKit

func bmiCalculator(_ weight : Int, _ height : Double) -> String {
    // Function calculates bmi based on formula (weight / height ^ 2
    // Returns string result
    let bmi = Double(weight) / (height * height)
    switch bmi {
        case 0...18.5:
            return "Underweight"
        case 18.5...25.0:
            return "Normal"
        case 25.0...30.0:
            return "Overweight"
        default:
            return "Obese"
    }
    
}

print(bmiCalculator(200, 25.0))
