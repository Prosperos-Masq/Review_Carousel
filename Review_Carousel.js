const img = document.querySelector('.image');
const name = document.querySelector('.author');
const title = document.querySelector('.title');
const bio = document.querySelector('.info');

const forward = document.querySelector('.forward');
const back = document.querySelector('.back');
const surprise = document.querySelector('.surprise');



const people = [
    {
      pic: 'https://images.generated.photos/gTXnpA7huxsXPXF0SB_vu1q3nrwWJHJs60qYVfoix6o/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3OTczOTQuanBn.jpg',
      name: 'susan smith',
      job: 'web developer',
      bio: 'Cras quis enim laoreet, luctus nisl vehicula, vulputate turpis. Suspendisse sapien ipsum, hendrerit id lobortis sit amet, dignissim in dui. Vestibulum interdum felis vel tortor vulputate, at viverra purus posuere. Praesent quis commodo lorem. Praesent sagittis ex id justo pulvinar, in ullamcorper ex elementum.'
    },
  
    {
      pic: 'https://images.generated.photos/55PIJNTCDK-NrX75JzMuT432K4anRQTiU_iKZBbgfRY/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNzAwMjQuanBn.jpg',
      name: 'Erasmo Menchaca',
      job: 'Finacial Guy',
      bio: 'Etiam sagittis massa dolor, vitae laoreet nibh tristique id. Morbi malesuada egestas eros nec tempor. Maecenas feugiat ut diam ut egestas. Morbi neque dolor, aliquet id nisi quis, viverra condimentum nisi. Cras at libero et metus porttitor placerat. Etiam a iaculis mauris, eget tempus felis. Donec nec viverra risus.'
    },
  
  {
      pic: 'https://news.stv.tv/wp-content/uploads/2021/03/5e66fe23e83e012c303bee319b943964-256x256.jpg',
      name: 'peter jones',
      job: 'intern',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit non est blandit eleifend. Integer id massa iaculis, vehicula augue ut, consectetur metus. Vestibulum et sapien odio. Mauris sed vulputate sapien. Donec orci urna, auctor eget auctor in, efficitur ac ante.'
    },
  
    {
      pic: 'https://images.pexels.com/users/avatars/142259/spencer-selover-240.jpeg?auto=compress&fit=crop&h=256&w=256',
      name: 'Chase McClurg',
      job: 'Paramedic',
      bio: 'Pellentesque consequat turpis nec nunc efficitur, non ultrices lorem dapibus. Nullam euismod metus sed est bibendum, sed hendrerit purus condimentum. Sed pulvinar dignissim semper. Mauris et condimentum sem, vestibulum euismod lacus. Quisque pellentesque at urna non sagittis.'
    }
];

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  showPeople(people);
});

function showPerson(people){
  const item = people[currentItem];
  img.src = item.pic;
  name.textContent = item.name;
  title.textContent = item.job;
  bio.textContent = item.bio;
}

forward.addEventListener('click', () => {
  currentItem++;
  if (currentItem > people.length - 1) {
    currentItem = 0;
  }
  showPerson(people);
});

back.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = people.length - 1;
  }
  showPerson(people);
});

surprise.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * people.length);
  showPerson(people);
});