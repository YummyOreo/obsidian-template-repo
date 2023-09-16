module.exports = async (params) => {
    const { quickAddApi: { inputPrompt, executeChoice }, obsidian } = params;
    let homework = await inputPrompt("Homework");
    if (homework == undefined || homework.trim() == "") {
        return;
    }
	homework = homework.trim()
    var important = false
    if (homework.endsWith("important")) {
        homework = homework.replace(" important", "")
        var important = true
    }
	let note = ""
	if (homework.includes("note: ")) {
		hn = homework.split("note: ")
		homework = hn[0]
		note = hn[1]
	}
	homework = homework.trim()
	note = note.trim()
    due_date = await inputPrompt("Due date");
    if (due_date == undefined || due_date.trim() == "") {
        return;
    }
    const nldatesPlugin = app.plugins.getPlugin("nldates-obsidian");
    const parsedResult = nldatesPlugin.parseDate(due_date);
    due_date = parsedResult.moment.format("YYYY-MM-DD")

    let line = "- [ ] #school ***" + homework + "*** [due:: " + due_date + "]";
    if (important) {
        line += " [important::true]"
    }
	if (note != "") {
		line += ' [note:: "' + note + '"]'
	}

    await executeChoice("Homework confirm", { x: line })
}
