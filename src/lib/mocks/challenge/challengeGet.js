export const ALL_OF_HALLENGES = {
  // /challenge
  code: 200,
  message: '정상적으로 조회되었습니다.',
  data: {
    challenges: [
      {
        id: 1,
        pet_id: 2,
        title: '2시간 산책시키기',
        start_date: 2022 - 10 - 31,
        end_date: 2022 - 11 - 30,
        target_cnt: 3,
      },
      {
        id: 2,
        pet_id: 4,
        title: '21시간 이상 밥먹이기',
        start_date: 2022 - 10 - 31,
        end_date: 2022 - 11 - 30,
        target_cnt: 3,
      },
    ],
  },
};

export const ONE_CHALLENGE = {
  // challenge/{id}
  code: 200,
  message: '정상적으로 조회되었습니다.',
  data: {
    id: 1,
    pet_id: 2,
    title: '2시간 산책시키기',
    start_date: 2022 - 10 - 31,
    end_date: 2022 - 11 - 30,
    target_cnt: 3,
  },
};

export const SPECIFIC_DAY_CHALLENGE = {
  // challenge/daily-challenge/{challenge_id}
  code: 200,
  message: '정상적으로 조회되었습니다.',
  data: {
    id: 1,
    pet_id: 2,
    title: '2시간 산책시키기',
    start_date: 2022 - 10 - 31,
    end_date: 2022 - 11 - 30,
    target_cnt: 3,
    is_accomplished: true,
    daily_challenge_id: 1,
  },
};

export const SPECIFIC_DAY_CHALLENGES = {
  // challenge/daily-challenge
  code: 200,
  message: '정상적으로 조회되었습니다.',
  data: {
    challenges: [
      {
        id: 1,
        pet_id: 2,
        title: '2시간 산책시키기',
        start_date: 2022 - 10 - 31,
        end_date: 2022 - 11 - 30,
        target_cnt: 3,
        is_accomplished: true,
        daily_challenge_id: 1,
      },
      {
        id: 2,
        pet_id: 4,
        title: '1시간 이상 산책시키기',
        start_date: 2022 - 10 - 31,
        end_date: 2022 - 11 - 30,
        target_cnt: 3,
        is_accomplished: false,
        daily_challenge_id: null,
      },
    ],
  },
};
