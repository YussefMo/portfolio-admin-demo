const username = import.meta.env.VITE_HIT_HUB_USER;
const token = import.meta.env.VITE_GIT_HUB_TOKEN;


export async function getRepos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }

  return res.json();
}

export async function getTotalContributions(): Promise<number> {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }
      `
    })
  });

  const { data } = await res.json();
  return data.user.contributionsCollection.contributionCalendar
    .totalContributions;
}
