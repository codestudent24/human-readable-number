module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    let numberString = number.toString().split("").reverse();
    let result = "";

    if (numberString[2] != undefined) {
        switch (numberString[2]) {
            case "9":
                result += "nine hundred ";
                break;
            case "8":
                result += "eight hundred ";
                break;
            case "7":
                result += "seven hundred ";
                break;
            case "6":
                result += "six hundred ";
                break;
            case "5":
                result += "five hundred ";
                break;
            case "4":
                result += "four hundred ";
                break;
            case "3":
                result += "three hundred ";
                break;
            case "2":
                result += "two hundred ";
                break;
            case "1":
                result += "one hundred ";
                break;
            default:
                break;
        }
    }

    if (numberString[1] != undefined) {
        switch (numberString[1]) {
            case "9":
                result += "ninety ";
                break;
            case "8":
                result += "eighty ";
                break;
            case "7":
                result += "seventy ";
                break;
            case "6":
                result += "sixty ";
                break;
            case "5":
                result += "fifty ";
                break;
            case "4":
                result += "forty ";
                break;
            case "3":
                result += "thirty ";
                break;
            case "2":
                result += "twenty ";
                break;
            case "1":
                switch (numberString[0]) {
                    case "9":
                        result += "nineteen";
                        break;
                    case "8":
                        result += "eighteen";
                        break;
                    case "7":
                        result += "seventeen";
                        break;
                    case "6":
                        result += "sixteen";
                        break;
                    case "5":
                        result += "fifteen";
                        break;
                    case "4":
                        result += "fourteen";
                        break;
                    case "3":
                        result += "thirteen";
                        break;
                    case "2":
                        result += "twelve";
                        break;
                    case "1":
                        result += "eleven";
                        break;
                    case "0":
                        result += "ten";
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    if (numberString[1] != "1") {
        switch (numberString[0]) {
            case "9":
                result += "nine";
                break;
            case "8":
                result += "eight";
                break;
            case "7":
                result += "seven";
                break;
            case "6":
                result += "six";
                break;
            case "5":
                result += "five";
                break;
            case "4":
                result += "four";
                break;
            case "3":
                result += "three";
                break;
            case "2":
                result += "two";
                break;
            case "1":
                result += "one";
                break;
            default:
                break;
        }
    }

    return result.trim();
};
