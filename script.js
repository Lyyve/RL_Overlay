fetch('config.json')
  .then(response => response.json())
  .then(config => {
    document.getElementById('name1').textContent = config.team1.name;
    document.getElementById('name2').textContent = config.team2.name;
    document.getElementById('score1').textContent = config.score.team1;
    document.getElementById('score2').textContent = config.score.team2;
    document.getElementById('timer').textContent = config.timer;
    document.getElementById('logo1').src = config.team1.logo;
    document.getElementById('logo2').src = config.team2.logo;
    document.querySelector('.team1 .team-name').style.color = config.team1.color;
    document.querySelector('.team2 .team-name').style.color = config.team2.color;
  });