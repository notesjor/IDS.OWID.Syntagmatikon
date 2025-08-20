export default class cite {
  getCite(page) {
    return `"${page}". In: Kathrin Steyer, Annelen Brunner, und Jan Oliver Rüdiger. 2025. Syntagmatikon. Mannheim: Leibniz-Institut für Deutsche Sprache. https://syntagmatikon.ids-mannheim.de/, abgerufen am ${new Date().toLocaleDateString(
          "de-DE",
          { year: "numeric", month: "2-digit", day: "2-digit" }
        )}`;
  }
}
