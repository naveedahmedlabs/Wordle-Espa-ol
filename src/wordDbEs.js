// Spanish Word Database — production build
// Auto-generated from a real, frequency-ranked Spanish corpus (wordfreq / OpenSubtitles+Wikipedia+Web).
// Every word is a genuine, everyday 5-letter Spanish word (accents stripped, uppercased) —
// filtered to remove proper nouns, brand names, slurs, and profanity.
//
// Sizing: 240 words per difficulty tier (960 total). Since getDailyWordEs() cycles through
// difficulties in a fixed 4-day rotation, each tier is used on ~1 in 4 days, so 240 words per
// tier covers 240 * 4 = 960 days (~2.6 years) of unique daily puzzles before any repeat.
//
// Hints are generated deterministically from the word's own letters (vowel count, unique-letter
// count, repeated-letter check, first/last letter) so they are always 100% accurate — no
// hand-written trivia that could be wrong. Difficulty controls how much is revealed:
//   easy       -> 2 hints, most revealing (vowel count + first letter)
//   medium     -> 2 hints, moderate (first + last letter)
//   hard       -> 3 hints, escalating (vowel count -> repeat check -> last letter)
//   ultraHard  -> 3 hints, most cryptic (unique-letter count -> repeat check -> first+last letter)
import { getNYTDate } from './dateUtils';

export const WORDS_DB_ES = {
  "easy": [
    {
      "word": "SOBRE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "TODOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "TIENE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "ENTRE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "PUEDE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "DESDE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "HASTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "HACER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "AHORA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "DONDE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "PARTE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "MEJOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "MUCHO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "MISMO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "TENGO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "ESTAN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "GENTE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'G'."
      ]
    },
    {
      "word": "ESTOY",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "MUNDO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "OTROS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'O'."
      ]
    },
    {
      "word": "COSAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "MENOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "NUNCA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "TANTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "ANTES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "HABIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "TENER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "ELLOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "LUGAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "HECHO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "DECIR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "TODAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "ESTOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "FORMA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "NUEVO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "ESTAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "ESTAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "QUIEN",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'Q'."
      ]
    },
    {
      "word": "BUENO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'B'."
      ]
    },
    {
      "word": "LUEGO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "PODER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "NADIE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "NUEVA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "OTRAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'O'."
      ]
    },
    {
      "word": "VECES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "MAYOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "SEGUN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "MEDIO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "FUERA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "HACIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "GRUPO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'G'."
      ]
    },
    {
      "word": "HABER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "PUEDO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "BUENA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'B'."
      ]
    },
    {
      "word": "MUJER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "NOCHE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "MISMA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "TENIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "FINAL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "PUNTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "SABER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "VAMOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "FAVOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "GUSTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'G'."
      ]
    },
    {
      "word": "CLARO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "HORAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "IGUAL",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'I'."
      ]
    },
    {
      "word": "MADRE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "SENOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "FALTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "TARDE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "MESES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "ALGUN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "DICHO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "NIVEL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "NINOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "SERIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "HACEN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "HEMOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "JUEGO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "SIGUE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "SOMOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "CERCA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "RAZON",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'R'."
      ]
    },
    {
      "word": "AMIGO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "PADRE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "SALIR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "VISTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "UNICO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'U'."
      ]
    },
    {
      "word": "PASAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "AYUDA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "LIBRO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "DATOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "DEJAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "CINCO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "CLASE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "HIJOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "USTED",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'U'."
      ]
    },
    {
      "word": "LARGO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "ORDEN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'O'."
      ]
    },
    {
      "word": "DEMAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "DICEN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "JUNTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "LISTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "TOTAL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "TRATA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "VIDEO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "VIENE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "QUEDA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'Q'."
      ]
    },
    {
      "word": "SALUD",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "SITIO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "TOMAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "CALLE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "LINEA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "JULIO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "PUEDA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "VIVIR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "CASOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "LIBRE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "SABES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "FOTOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "FACIL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "HABLA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "MIEDO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "PONER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "APOYO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "MANOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "MUCHA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "CHILE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "DEBEN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "MARZO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "SERIE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "PESAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "NORTE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "VISTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "AMBOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "MEDIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "ABRIL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "CAMPO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "JOVEN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "JUNIO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "LLEVA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "RESTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'R'."
      ]
    },
    {
      "word": "PAPEL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "UNICA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'U'."
      ]
    },
    {
      "word": "CARGO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "ELLAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "ENERO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "LLAMA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "SIGLO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "COMUN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "SANTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "TENGA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "PLAZA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "VALOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "CAUSA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "FECHA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "FELIZ",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "OBRAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'O'."
      ]
    },
    {
      "word": "CIVIL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "LOCAL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "VIAJE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "LLEGO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "NEGRO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'N'."
      ]
    },
    {
      "word": "COMER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "GANAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'G'."
      ]
    },
    {
      "word": "LUCHA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "SABEN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "JUSTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "PODIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "TEMAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "EXITO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "AUTOR",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "LEJOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "MARIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "PLATA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "COLOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "FONDO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "IDEAS",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'I'."
      ]
    },
    {
      "word": "LLEGA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "MENOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "POCOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "ARMAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "BUSCA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'B'."
      ]
    },
    {
      "word": "JUGAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "EPOCA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "BANCO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'B'."
      ]
    },
    {
      "word": "CORTE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "MITAD",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "SERIO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "CREAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "HACES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "RADIO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'R'."
      ]
    },
    {
      "word": "VIEJO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "COSTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "CULPA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "FUEGO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'F'."
      ]
    },
    {
      "word": "HABRA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'H'."
      ]
    },
    {
      "word": "CREER",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "CARTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "CHINA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "LEYES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "AIRES",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "BANDA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'B'."
      ]
    },
    {
      "word": "PAGAR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "UNION",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'U'."
      ]
    },
    {
      "word": "ABAJO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "ATRAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'A'."
      ]
    },
    {
      "word": "CAPAZ",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "DARLE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "ERROR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'E'."
      ]
    },
    {
      "word": "GUSTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'G'."
      ]
    },
    {
      "word": "REDES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'R'."
      ]
    },
    {
      "word": "SIETE",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "TEXTO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "CHICA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "DOLOR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "MENTE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "SERAN",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "CIELO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "CANAL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "DANDO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "JAMAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'J'."
      ]
    },
    {
      "word": "MILES",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'M'."
      ]
    },
    {
      "word": "POBRE",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "VOTOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "TIPOS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'T'."
      ]
    },
    {
      "word": "CURSO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "GANAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'G'."
      ]
    },
    {
      "word": "SUELO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "CASAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'C'."
      ]
    },
    {
      "word": "SUENO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'S'."
      ]
    },
    {
      "word": "ZONAS",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'Z'."
      ]
    },
    {
      "word": "DESEO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'D'."
      ]
    },
    {
      "word": "QUEDO",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'Q'."
      ]
    },
    {
      "word": "VENTA",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'V'."
      ]
    },
    {
      "word": "LEGAL",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'L'."
      ]
    },
    {
      "word": "PEDIR",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "PERRO",
      "hints": [
        "Tiene 2 vocales.",
        "Empieza con la letra 'P'."
      ]
    },
    {
      "word": "DECIA",
      "hints": [
        "Tiene 3 vocales.",
        "Empieza con la letra 'D'."
      ]
    }
  ],
  "medium": [
    {
      "word": "DOBLE",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "MARCA",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PESOS",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "REINO",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SACAR",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "MURIO",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SABIA",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VIEJA",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "AQUEL",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "LARGA",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LLEVO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PLAZO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SALIO",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SANTO",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VERDE",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "LIDER",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "PODRA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "TALES",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "ACABA",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CHICO",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CREEN",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "HONOR",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "MORIR",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "TANTA",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "HOGAR",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "MANDO",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VEMOS",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "AMBAS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CARNE",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "DICES",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "MARCO",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "FINES",
      "hints": [
        "Empieza con la letra 'F'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "GOLPE",
      "hints": [
        "Empieza con la letra 'G'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "GRADO",
      "hints": [
        "Empieza con la letra 'G'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "LLENO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VENIR",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "AMIGA",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LUNES",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "NOVIA",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SIRVE",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "DICHA",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "HOTEL",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "MATAR",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "POCAS",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CLAVE",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "HAGAN",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "QUIZA",
      "hints": [
        "Empieza con la letra 'Q'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "REINA",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SALVO",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "AREAS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CREES",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "ESTEN",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "HAYAN",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "SUENA",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ABRIR",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "ACABO",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BASTA",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CARGA",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ENTRA",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "NUEVE",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "VILLA",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ACTOS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CALOR",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "DEBES",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "JUNTA",
      "hints": [
        "Empieza con la letra 'J'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LISTO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PENSE",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CLARA",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "COCHE",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CORTO",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DUDAS",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "LECHE",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "MIRAR",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "SUPER",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "UNIDO",
      "hints": [
        "Empieza con la letra 'U'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VIDAS",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "OJALA",
      "hints": [
        "Empieza con la letra 'O'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "TAREA",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "GRAVE",
      "hints": [
        "Empieza con la letra 'G'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "HABLO",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "LLENA",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PLAYA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VIVEN",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "VOTAR",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "DULCE",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "NEGRA",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PASAN",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "SUBIR",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "AGUAS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "ALTOS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DEJAN",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "INDIA",
      "hints": [
        "Empieza con la letra 'I'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PENAL",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "PONEN",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "AVION",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "COSTO",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DISCO",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ETAPA",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SUELE",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ACASO",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BASES",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "FRASE",
      "hints": [
        "Empieza con la letra 'F'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "MOVIL",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "TRATO",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VENGA",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DEUDA",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "HUMOR",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "LINDO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "MORAL",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "MUSEO",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "NOTAS",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "PIDIO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BREVE",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "FIRMA",
      "hints": [
        "Empieza con la letra 'F'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "METRO",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SENAL",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "VALLE",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "LADOS",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "PASOS",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "QUEDE",
      "hints": [
        "Empieza con la letra 'Q'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "BOLSA",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CLIMA",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CORTA",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DEBIA",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "BAJAR",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "EUROS",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "JUEGA",
      "hints": [
        "Empieza con la letra 'J'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LLAMO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "MALAS",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "NOVIO",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VAYAN",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "VERLO",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VERTE",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "VUELO",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ANUAL",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "NINAS",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "REYES",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "TORNO",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CAIDA",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DUENO",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "HAGAS",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "LABOR",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "LETRA",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "MALOS",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "OESTE",
      "hints": [
        "Empieza con la letra 'O'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "SERES",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "TENES",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "TOCAR",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "USADO",
      "hints": [
        "Empieza con la letra 'U'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DIRIA",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "FUESE",
      "hints": [
        "Empieza con la letra 'F'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "HARIA",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "MOTOR",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "NACIO",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PUNTA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SALGA",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ANGEL",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "CHINO",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PECHO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PELEA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SALEN",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "TOQUE",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ARTES",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "LINDA",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PARAR",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "SALON",
      "hints": [
        "Empieza con la letra 'S'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "ARBOL",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "AUTOS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DEJEN",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "IDEAL",
      "hints": [
        "Empieza con la letra 'I'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "ISLAS",
      "hints": [
        "Empieza con la letra 'I'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "RUIDO",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ALTAS",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "FIRME",
      "hints": [
        "Empieza con la letra 'F'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "HECHA",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "MINAS",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "QUISO",
      "hints": [
        "Empieza con la letra 'Q'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ARENA",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "BAJOS",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DANOS",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "PIEZA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PISTA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RITMO",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "GOLES",
      "hints": [
        "Empieza con la letra 'G'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "LOGRO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "MUERE",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "OBVIO",
      "hints": [
        "Empieza con la letra 'O'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PLANO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PONGO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "RURAL",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "ANIMO",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ACTOR",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "ANDAR",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "BRAZO",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ENTRO",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "HOJAS",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "POETA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VISTE",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "VOCES",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "BARCO",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BOMBA",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DEDOS",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "TORRE",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "TRAER",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "AVISO",
      "hints": [
        "Empieza con la letra 'A'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CONTO",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DARSE",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ECHAR",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "LEIDO",
      "hints": [
        "Empieza con la letra 'L'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PIDEN",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "REGLA",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RENTA",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RICOS",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "BAILE",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "DESEA",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ESTES",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "GUSTE",
      "hints": [
        "Empieza con la letra 'G'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "HUEVO",
      "hints": [
        "Empieza con la letra 'H'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PARED",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'D'."
      ]
    },
    {
      "word": "BELLA",
      "hints": [
        "Empieza con la letra 'B'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DARTE",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "DEBIO",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DIGAS",
      "hints": [
        "Empieza con la letra 'D'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "EXTRA",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "TURNO",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VACIO",
      "hints": [
        "Empieza con la letra 'V'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CICLO",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CONDE",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "FALSO",
      "hints": [
        "Empieza con la letra 'F'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "MODOS",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "MONTE",
      "hints": [
        "Empieza con la letra 'M'.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "NORMA",
      "hints": [
        "Empieza con la letra 'N'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PLENO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PONGA",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "TABLA",
      "hints": [
        "Empieza con la letra 'T'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "COPIA",
      "hints": [
        "Empieza con la letra 'C'.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ENVIO",
      "hints": [
        "Empieza con la letra 'E'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "GASTO",
      "hints": [
        "Empieza con la letra 'G'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PASEO",
      "hints": [
        "Empieza con la letra 'P'.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ROJAS",
      "hints": [
        "Empieza con la letra 'R'.",
        "Termina con la letra 'S'."
      ]
    }
  ],
  "hard": [
    {
      "word": "TECHO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "AUDIO",
      "hints": [
        "Tiene 4 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BROMA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DUELE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "LUCES",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "POSEE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "VAYAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "VEASE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "DRAMA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "FALSA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "FERIA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "MAGIA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "QUESO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SABOR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "VENGO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VIRUS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DIGAN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "MANDA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "METAL",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "POLVO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SOCIO",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ADIOS",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "BAJAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CABLE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CORRE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CUYOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DEJES",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "LOGRA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "OCUPA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PLENA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ROBAR",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "SILLA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SOLOS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "TOMAN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "ABRIO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CARAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DEBER",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "HEROE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "METER",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "PRIMO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SIGAN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "YENDO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "HABLE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "HARAN",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "HIELO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "RANGO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "RONDA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RUMBO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SOLAR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "APOYA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CARRO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CIFRA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DARME",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "PATIO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PRIMA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ARROZ",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'Z'."
      ]
    },
    {
      "word": "GORDO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "LOCOS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "NIEVE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "PACTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "QUISE",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "TONTO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VENIA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VERLA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DAMOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DROGA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DEBIL",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "FALLO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "LENTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "LLEVE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "MUEVE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "POLLO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PONES",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "RELOJ",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'J'."
      ]
    },
    {
      "word": "SALTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SENTI",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'I'."
      ]
    },
    {
      "word": "TRAJE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ABUSO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DIETA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LANZO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "NIETO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PLATO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "QUITA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RAMOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "RUEDA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "TEMOR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "TIRAR",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "VERSE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ALBUM",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'M'."
      ]
    },
    {
      "word": "ARABE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ANCHO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BORDE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CANTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DUQUE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "GENIO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "HIJAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "JEFES",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "MANGA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VENDE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "BOLAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CALMA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CREIA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "DEJAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "EXIGE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "MIREN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "TESIS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "VIVOS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CAJAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CERRO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "COGER",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "DARIA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LANZA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SUAVE",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "BELLO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BRAVO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CULTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "FLUJO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "INDIO",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "METAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "QUITO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VIVIA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PAGAN",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "PAGOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "PESCA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PINTA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SALSA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SALTA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "TASAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "ETICA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "ACERO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "BARRA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "BUSCO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CINTA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "FALLA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "GATOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "PALMA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "POEMA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "QUEJA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SUFRE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ALDEA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "BEBER",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "CRECE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "FUMAR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "HAYAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "NARIZ",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'Z'."
      ]
    },
    {
      "word": "PENSO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SALAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "SUIZA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "BANCA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CENSO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CREAN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "KILOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "MASAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "SERLO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "SIGNO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "AYUDO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "GRITO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "MOVER",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "OTONO",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PLACA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VOLAR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "ACIDO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CAIDO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DOLAR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "FRUTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "JUSTA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PASTA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PRESO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ROMPE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "TRAJO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "VITAL",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "BORDO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "COBRE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CRUEL",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "CUYAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "DOSIS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "GESTO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "LLAVE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "MULTA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "NIEGA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "NOBLE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "PECES",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "RABIA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RAYOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "VIMOS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "ANADE",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "ENVIA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PENAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "PODES",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "ROSAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "RUSOS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "RUTAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "SELVA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SUBIO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "CANTA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CITAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CUBRE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "NEGAR",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'R'."
      ]
    },
    {
      "word": "PERDI",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'I'."
      ]
    },
    {
      "word": "PIZZA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "RIVAL",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'L'."
      ]
    },
    {
      "word": "SELLO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "TUMBA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "VERAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "VIVIO",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "ACTUA",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "AEREA",
      "hints": [
        "Tiene 4 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "CUOTA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "LLAME",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "PONTE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "REVES",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "SURGE",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "TENIS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "TRATE",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "BEBES",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "CIEGO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DANZA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "PATAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "VIVES",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "AMADO",
      "hints": [
        "Tiene 3 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "AYUDE",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'E'."
      ]
    },
    {
      "word": "CASCO",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "DIGNO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "GRASA",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "MACHO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "PASEN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "PRESA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "SEPAN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "TOMEN",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "ALMAS",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "BOTON",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "DUELO",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "FILAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "FLOTA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "FRUTA",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    },
    {
      "word": "GANAN",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "HIMNO",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'O'."
      ]
    },
    {
      "word": "MATAN",
      "hints": [
        "Tiene 2 vocales.",
        "Repite una letra.",
        "Termina con la letra 'N'."
      ]
    },
    {
      "word": "MIRAS",
      "hints": [
        "Tiene 2 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'S'."
      ]
    },
    {
      "word": "SOLIA",
      "hints": [
        "Tiene 3 vocales.",
        "No repite ninguna letra.",
        "Termina con la letra 'A'."
      ]
    }
  ],
  "ultraHard": [
    {
      "word": "VASCO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'O'."
      ]
    },
    {
      "word": "BAHIA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'A'."
      ]
    },
    {
      "word": "ELIGE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'E' y termina con 'E'."
      ]
    },
    {
      "word": "NUBES",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'N' y termina con 'S'."
      ]
    },
    {
      "word": "PAPAS",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "ROJOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "CREMA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "GOLFO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'G' y termina con 'O'."
      ]
    },
    {
      "word": "MONTO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'M' y termina con 'O'."
      ]
    },
    {
      "word": "SAQUE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'E'."
      ]
    },
    {
      "word": "VOLVI",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'I'."
      ]
    },
    {
      "word": "ANIME",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'A' y termina con 'E'."
      ]
    },
    {
      "word": "CREAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'S'."
      ]
    },
    {
      "word": "HORNO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'H' y termina con 'O'."
      ]
    },
    {
      "word": "NOTAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'N' y termina con 'R'."
      ]
    },
    {
      "word": "PIANO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'O'."
      ]
    },
    {
      "word": "RAMAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "SALES",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'S'."
      ]
    },
    {
      "word": "SEPAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'S'."
      ]
    },
    {
      "word": "TIROS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'S'."
      ]
    },
    {
      "word": "TRAMA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'A'."
      ]
    },
    {
      "word": "USADA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'U' y termina con 'A'."
      ]
    },
    {
      "word": "BECAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "CAPAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'S'."
      ]
    },
    {
      "word": "DABAN",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'D' y termina con 'N'."
      ]
    },
    {
      "word": "EVITA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'E' y termina con 'A'."
      ]
    },
    {
      "word": "HUESO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'H' y termina con 'O'."
      ]
    },
    {
      "word": "MEDIR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'R'."
      ]
    },
    {
      "word": "MUROS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'S'."
      ]
    },
    {
      "word": "PILAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'R'."
      ]
    },
    {
      "word": "PISOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "POSTA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'A'."
      ]
    },
    {
      "word": "SACAN",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'N'."
      ]
    },
    {
      "word": "SALGO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'O'."
      ]
    },
    {
      "word": "ACOSO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'O'."
      ]
    },
    {
      "word": "CAUSO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'O'."
      ]
    },
    {
      "word": "CIRCO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'O'."
      ]
    },
    {
      "word": "CUEVA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "NACER",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'N' y termina con 'R'."
      ]
    },
    {
      "word": "NATAL",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'N' y termina con 'L'."
      ]
    },
    {
      "word": "PASAS",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "RUBIO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'R' y termina con 'O'."
      ]
    },
    {
      "word": "SEXTO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'O'."
      ]
    },
    {
      "word": "SUYOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'S'."
      ]
    },
    {
      "word": "TRUCO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'O'."
      ]
    },
    {
      "word": "VAPOR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'R'."
      ]
    },
    {
      "word": "ANDAN",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'N'."
      ]
    },
    {
      "word": "BALAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "BARBA",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'A'."
      ]
    },
    {
      "word": "BANOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "COSTE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'E'."
      ]
    },
    {
      "word": "CUERO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'O'."
      ]
    },
    {
      "word": "DAMAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'D' y termina con 'S'."
      ]
    },
    {
      "word": "DIANA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'D' y termina con 'A'."
      ]
    },
    {
      "word": "DIERA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'A'."
      ]
    },
    {
      "word": "HARTO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'H' y termina con 'O'."
      ]
    },
    {
      "word": "METIO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'O'."
      ]
    },
    {
      "word": "SEXTA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'A'."
      ]
    },
    {
      "word": "SOBRA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'A'."
      ]
    },
    {
      "word": "SOLAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'S'."
      ]
    },
    {
      "word": "TIGRE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'E'."
      ]
    },
    {
      "word": "UNIDA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'U' y termina con 'A'."
      ]
    },
    {
      "word": "ANDES",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'A' y termina con 'S'."
      ]
    },
    {
      "word": "MAPAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'M' y termina con 'S'."
      ]
    },
    {
      "word": "PARES",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "PRISA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'A'."
      ]
    },
    {
      "word": "ROCAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "SERAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'S'."
      ]
    },
    {
      "word": "TRONO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'O'."
      ]
    },
    {
      "word": "BESOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "DUROS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'S'."
      ]
    },
    {
      "word": "GORDA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'G' y termina con 'A'."
      ]
    },
    {
      "word": "GUAPA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'G' y termina con 'A'."
      ]
    },
    {
      "word": "GUAPO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'G' y termina con 'O'."
      ]
    },
    {
      "word": "MUERA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'A'."
      ]
    },
    {
      "word": "NOMAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'N' y termina con 'S'."
      ]
    },
    {
      "word": "PARTO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'O'."
      ]
    },
    {
      "word": "POSTS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "VALEN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'N'."
      ]
    },
    {
      "word": "VIGOR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'R'."
      ]
    },
    {
      "word": "ACABE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'E'."
      ]
    },
    {
      "word": "AEREO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'O'."
      ]
    },
    {
      "word": "BALON",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'N'."
      ]
    },
    {
      "word": "COPAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'S'."
      ]
    },
    {
      "word": "MESAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'M' y termina con 'S'."
      ]
    },
    {
      "word": "NAVES",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'N' y termina con 'S'."
      ]
    },
    {
      "word": "RARAS",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "REUNE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'E'."
      ]
    },
    {
      "word": "TALLA",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'A'."
      ]
    },
    {
      "word": "TONTA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'A'."
      ]
    },
    {
      "word": "TRIBU",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'U'."
      ]
    },
    {
      "word": "CERDO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'O'."
      ]
    },
    {
      "word": "CRUCE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'E'."
      ]
    },
    {
      "word": "DARAN",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'D' y termina con 'N'."
      ]
    },
    {
      "word": "DUCHA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'A'."
      ]
    },
    {
      "word": "DURAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'S'."
      ]
    },
    {
      "word": "GLOBO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'G' y termina con 'O'."
      ]
    },
    {
      "word": "LENTA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'L' y termina con 'A'."
      ]
    },
    {
      "word": "LIMON",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'L' y termina con 'N'."
      ]
    },
    {
      "word": "MICRO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'O'."
      ]
    },
    {
      "word": "SABIO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'O'."
      ]
    },
    {
      "word": "SALIA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'A'."
      ]
    },
    {
      "word": "SUCIO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'O'."
      ]
    },
    {
      "word": "VIVAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'S'."
      ]
    },
    {
      "word": "ASUME",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'A' y termina con 'E'."
      ]
    },
    {
      "word": "CAIGA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "COBRA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "FICHA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'A'."
      ]
    },
    {
      "word": "FOROS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'F' y termina con 'S'."
      ]
    },
    {
      "word": "HUELE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'H' y termina con 'E'."
      ]
    },
    {
      "word": "MIRAN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'N'."
      ]
    },
    {
      "word": "OPERA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'O' y termina con 'A'."
      ]
    },
    {
      "word": "PALOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "RETOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "RODEA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'R' y termina con 'A'."
      ]
    },
    {
      "word": "SIRVA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'A'."
      ]
    },
    {
      "word": "TOROS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'S'."
      ]
    },
    {
      "word": "BONOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "CENAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'R'."
      ]
    },
    {
      "word": "COMEN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'N'."
      ]
    },
    {
      "word": "DIGNA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'A'."
      ]
    },
    {
      "word": "PONIA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'A'."
      ]
    },
    {
      "word": "SONAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'R'."
      ]
    },
    {
      "word": "TRAEN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'N'."
      ]
    },
    {
      "word": "BOTAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "FIBRA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'A'."
      ]
    },
    {
      "word": "GASES",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'G' y termina con 'S'."
      ]
    },
    {
      "word": "GRANO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'G' y termina con 'O'."
      ]
    },
    {
      "word": "MAFIA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'M' y termina con 'A'."
      ]
    },
    {
      "word": "OIDOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'O' y termina con 'S'."
      ]
    },
    {
      "word": "PLANA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'A'."
      ]
    },
    {
      "word": "QUEMA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'Q' y termina con 'A'."
      ]
    },
    {
      "word": "SALDO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'O'."
      ]
    },
    {
      "word": "VIAJA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'A'."
      ]
    },
    {
      "word": "VIUDA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'A'."
      ]
    },
    {
      "word": "BUQUE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'E'."
      ]
    },
    {
      "word": "BURLA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'A'."
      ]
    },
    {
      "word": "CUIDA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "FATAL",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'F' y termina con 'L'."
      ]
    },
    {
      "word": "FIRMO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'O'."
      ]
    },
    {
      "word": "HALLA",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'H' y termina con 'A'."
      ]
    },
    {
      "word": "LAZOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'L' y termina con 'S'."
      ]
    },
    {
      "word": "OPINA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'O' y termina con 'A'."
      ]
    },
    {
      "word": "PEGAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'R'."
      ]
    },
    {
      "word": "PELOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "RATAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "ROLLO",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'O'."
      ]
    },
    {
      "word": "TRAMO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'O'."
      ]
    },
    {
      "word": "TRECE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'E'."
      ]
    },
    {
      "word": "ABREN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'A' y termina con 'N'."
      ]
    },
    {
      "word": "BARRO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'O'."
      ]
    },
    {
      "word": "CURVA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "LAVAR",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'L' y termina con 'R'."
      ]
    },
    {
      "word": "ROBOT",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'T'."
      ]
    },
    {
      "word": "RUBIA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'R' y termina con 'A'."
      ]
    },
    {
      "word": "SUCIA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'A'."
      ]
    },
    {
      "word": "TRIGO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'O'."
      ]
    },
    {
      "word": "TUITS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'S'."
      ]
    },
    {
      "word": "VELAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'S'."
      ]
    },
    {
      "word": "ALTAR",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'R'."
      ]
    },
    {
      "word": "ATACA",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'A'."
      ]
    },
    {
      "word": "BODAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "DIOSA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'A'."
      ]
    },
    {
      "word": "DISTE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'E'."
      ]
    },
    {
      "word": "FLACO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'O'."
      ]
    },
    {
      "word": "VEGAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'S'."
      ]
    },
    {
      "word": "VERAN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'N'."
      ]
    },
    {
      "word": "BANDO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'O'."
      ]
    },
    {
      "word": "FORMO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'F' y termina con 'O'."
      ]
    },
    {
      "word": "GAFAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'G' y termina con 'S'."
      ]
    },
    {
      "word": "MARTE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'E'."
      ]
    },
    {
      "word": "RICAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "RISAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "SEGUI",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'I'."
      ]
    },
    {
      "word": "SUMAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'R'."
      ]
    },
    {
      "word": "USABA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'U' y termina con 'A'."
      ]
    },
    {
      "word": "VERME",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'E'."
      ]
    },
    {
      "word": "ACUSA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'A'."
      ]
    },
    {
      "word": "AJENA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'A'."
      ]
    },
    {
      "word": "AJENO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'A' y termina con 'O'."
      ]
    },
    {
      "word": "HUECO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'H' y termina con 'O'."
      ]
    },
    {
      "word": "JOYAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'J' y termina con 'S'."
      ]
    },
    {
      "word": "PANEL",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'L'."
      ]
    },
    {
      "word": "ASILO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'A' y termina con 'O'."
      ]
    },
    {
      "word": "BOLSO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'B' y termina con 'O'."
      ]
    },
    {
      "word": "FAUNA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'F' y termina con 'A'."
      ]
    },
    {
      "word": "FUNDA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'A'."
      ]
    },
    {
      "word": "MUERO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'M' y termina con 'O'."
      ]
    },
    {
      "word": "SALVA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'S' y termina con 'A'."
      ]
    },
    {
      "word": "ULTRA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'U' y termina con 'A'."
      ]
    },
    {
      "word": "VACAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'S'."
      ]
    },
    {
      "word": "VACIA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'A'."
      ]
    },
    {
      "word": "BARES",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'S'."
      ]
    },
    {
      "word": "BRUTO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'B' y termina con 'O'."
      ]
    },
    {
      "word": "CANON",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'N'."
      ]
    },
    {
      "word": "CRUDO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'O'."
      ]
    },
    {
      "word": "DIMOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'S'."
      ]
    },
    {
      "word": "FINCA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'A'."
      ]
    },
    {
      "word": "LATIN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'L' y termina con 'N'."
      ]
    },
    {
      "word": "LUCRO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'L' y termina con 'O'."
      ]
    },
    {
      "word": "PASES",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "PILAS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "RAZAS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'S'."
      ]
    },
    {
      "word": "RUMOR",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'R' y termina con 'R'."
      ]
    },
    {
      "word": "TUNEL",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'L'."
      ]
    },
    {
      "word": "VINOS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'V' y termina con 'S'."
      ]
    },
    {
      "word": "ELITE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'E' y termina con 'E'."
      ]
    },
    {
      "word": "COBRO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'O'."
      ]
    },
    {
      "word": "DECIS",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'S'."
      ]
    },
    {
      "word": "OREJA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'O' y termina con 'A'."
      ]
    },
    {
      "word": "PIBES",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'S'."
      ]
    },
    {
      "word": "TURCO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'T' y termina con 'O'."
      ]
    },
    {
      "word": "ANCHA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'A'."
      ]
    },
    {
      "word": "ATACO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'O'."
      ]
    },
    {
      "word": "ATRAE",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'E'."
      ]
    },
    {
      "word": "CHECA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "CHUPA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'A'."
      ]
    },
    {
      "word": "CURAR",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'C' y termina con 'R'."
      ]
    },
    {
      "word": "DADOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'D' y termina con 'S'."
      ]
    },
    {
      "word": "DURAR",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'D' y termina con 'R'."
      ]
    },
    {
      "word": "FUNDO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'O'."
      ]
    },
    {
      "word": "GRITA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'G' y termina con 'A'."
      ]
    },
    {
      "word": "PLOMO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'P' y termina con 'O'."
      ]
    },
    {
      "word": "PODRE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'E'."
      ]
    },
    {
      "word": "PRADO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'O'."
      ]
    },
    {
      "word": "SUBEN",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'S' y termina con 'N'."
      ]
    },
    {
      "word": "TINTA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'A'."
      ]
    },
    {
      "word": "CITAR",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'C' y termina con 'R'."
      ]
    },
    {
      "word": "DEBUT",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'D' y termina con 'T'."
      ]
    },
    {
      "word": "FASES",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'F' y termina con 'S'."
      ]
    },
    {
      "word": "FURIA",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'F' y termina con 'A'."
      ]
    },
    {
      "word": "GALLO",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'G' y termina con 'O'."
      ]
    },
    {
      "word": "GUION",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'G' y termina con 'N'."
      ]
    },
    {
      "word": "LICEO",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'L' y termina con 'O'."
      ]
    },
    {
      "word": "MEMES",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'M' y termina con 'S'."
      ]
    },
    {
      "word": "PAGUE",
      "hints": [
        "Contiene 5 letras únicas.",
        "Todas sus letras son distintas.",
        "Empieza con 'P' y termina con 'E'."
      ]
    },
    {
      "word": "TARDA",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'T' y termina con 'A'."
      ]
    },
    {
      "word": "VASOS",
      "hints": [
        "Contiene 4 letras únicas.",
        "Repite una letra.",
        "Empieza con 'V' y termina con 'S'."
      ]
    },
    {
      "word": "AMABA",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'A'."
      ]
    },
    {
      "word": "ARMAR",
      "hints": [
        "Contiene 3 letras únicas.",
        "Repite una letra.",
        "Empieza con 'A' y termina con 'R'."
      ]
    }
  ]
};

export const ALL_WORDS_ES = [
  ...WORDS_DB_ES.easy.map(i => i.word),
  ...WORDS_DB_ES.medium.map(i => i.word),
  ...WORDS_DB_ES.hard.map(i => i.word),
  ...WORDS_DB_ES.ultraHard.map(i => i.word)
];

/**
 * Deterministically picks the word (and difficulty) for a given date.
 * Difficulty rotates Easy -> Medium -> Hard -> Ultra-Hard -> Easy... every 4 days,
 * starting from the epoch (2024-01-01). Within each difficulty, the word list is
 * walked in order and wraps around only after ~2.6 years (960 days) of unique days.
 */
export function getDailyWordEs(targetDate = getNYTDate()) {
  const epoch = new Date(2024, 0, 1);
  const diff = targetDate - epoch;
  const oneDay = 1000 * 60 * 60 * 24;
  const index = Math.max(0, Math.floor(diff / oneDay));

  const difficulties = ['Easy', 'Medium', 'Hard', 'Ultra-Hard'];
  const dbKeys = ['easy', 'medium', 'hard', 'ultraHard'];
  const diffIdx = ((index % 4) + 4) % 4;
  const difficulty = difficulties[diffIdx];
  const dbKey = dbKeys[diffIdx];

  const list = (WORDS_DB_ES[dbKey] && WORDS_DB_ES[dbKey].length > 0) ? WORDS_DB_ES[dbKey] : WORDS_DB_ES.easy;
  const wordIndex = Math.floor(index / 4) % list.length;
  const item = list[wordIndex] || list[0];

  return { ...item, difficulty, dayNumber: index + 1 };
}