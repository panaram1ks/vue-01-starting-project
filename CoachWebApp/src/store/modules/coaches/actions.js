export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;

    const coachData = {
      // id: new Date().toISOString(),
      //   id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-e2a97-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      // handle Error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
