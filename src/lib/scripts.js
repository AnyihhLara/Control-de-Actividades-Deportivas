class SportActivity {
    constructor(name, date, participants) {
        this.name = name;
        this.date = date;
        this.participants = participants;
    }
}

export class Controller {
    constructor() {
        this.sportsActivities = [];
    }
    addActivity(name, date, participants) {
        name = name.trim();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        let activity = this.sportsActivities.find(act => act.name === name);

        if (!activity) {
            if (name !== "") {
                this.sportsActivities.push(new SportActivity(name, date, participants));
            }
            else {
                throw new Error("El campo de nombre es obligatorio.")
            }
        }
        else {
            throw new Error("Ya existe una actividad con ese nombre.");
        }
    }
    modifyActivity(name, newDate, newParticipants) {
        let activity = this.sportsActivities.find(act => act.name === name);

        if (activity) {
            activity.date = newDate;
            activity.participants = newParticipants;
        }
        else {
            throw new Error("No existe ninguna actividad con ese nombre");
        }
    }
    deleteActivity(name) {
        let index = this.sportsActivities.findIndex(act => act.name === name);

        if (index !== -1) {
            this.sportsActivities.splice(index, 1);
        }
        else {
            throw new Error("Esa actividad no existe.");
        }
    }
    activitiesHighestNumberOfParticipants() {
        let highest = 0;
        let activitiesHighestNumberOfParticipants = [];

        for (let activity of this.sportsActivities) {

            if (activity.participants > highest) {
                highest = activity.participants;
                activitiesHighestNumberOfParticipants = [activity];
            }
            else if (activity.participants === highest) {
                activitiesHighestNumberOfParticipants.push(activity);
            }
        }
        return activitiesHighestNumberOfParticipants;
    }
}