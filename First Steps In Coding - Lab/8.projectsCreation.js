function projectCreation (input) {
    let architectName = input[0];
    let projectsNumber = Number(input[1]);
    let workingHoursForSingleProject = 3;
    let necessaryTimeToComplete = projectsNumber * workingHoursForSingleProject;
    let result = `The architect ${architectName} will need ${necessaryTimeToComplete} hours to complete ${projectsNumber} project/s.`;

    console.log(result);
}
projectCreation(['Simeon', '25']);

/* Напишете програма, която изчислява колко часа ще са необходими на един архитект,
за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.

Вход
От конзолата се четат 2 реда:
1.	Името на архитекта - текст
2.	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]

"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s." */