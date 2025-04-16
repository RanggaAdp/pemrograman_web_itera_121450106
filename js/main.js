class Schedule {
  constructor(subject, day, startTime, endTime) {
    this.id = Date.now();
    this.subject = subject;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

const subjectInput = document.getElementById('subject');
const dayInput = document.getElementById('day');
const startTimeInput = document.getElementById('startTime');
const endTimeInput = document.getElementById('endTime');
const addBtn = document.getElementById('addBtn');
const filterDayInput = document.getElementById('filterDay');
const scheduleList = document.getElementById('scheduleList');

let schedules = JSON.parse(localStorage.getItem('schedules')) || [];

const saveToStorage = () => localStorage.setItem('schedules', JSON.stringify(schedules));

const renderSchedules = () => {
  const filterValue = filterDayInput.value;
  scheduleList.innerHTML = '';
  schedules.filter(item => filterValue === 'all' || item.day === filterValue).forEach(item => {
    const div = document.createElement('div');
    div.className = 'schedule-item';
    div.innerHTML = `
      <span>${item.subject} - ${item.day}, ${item.startTime} - ${item.endTime}</span>
      <div class="actions">
        <button onclick="editSchedule(${item.id})">Edit</button>
        <button onclick="deleteSchedule(${item.id})">Hapus</button>
      </div>
    `;
    scheduleList.appendChild(div);
  });
};

const addSchedule = () => {
  const subject = subjectInput.value.trim();
  const day = dayInput.value;
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  if (!subject || !startTime || !endTime) return alert('Mohon lengkapi semua field');
  const newSchedule = new Schedule(subject, day, startTime, endTime);
  schedules.push(newSchedule);
  saveToStorage();
  renderSchedules();
  subjectInput.value = '';
  startTimeInput.value = '';
  endTimeInput.value = '';
};

const deleteSchedule = id => {
  schedules = schedules.filter(item => item.id !== id);
  saveToStorage();
  renderSchedules();
};

const editSchedule = async id => {
  const subject = prompt('Edit Mata Kuliah:');
  const startTime = prompt('Edit Jam Masuk (HH:MM):');
  const endTime = prompt('Edit Jam Keluar (HH:MM):');
  const day = prompt('Edit Hari (Senin - Jumat):');
  if (!subject || !startTime || !endTime || !day) return;
  const index = schedules.findIndex(s => s.id === id);
  if (index !== -1) {
    schedules[index].subject = subject;
    schedules[index].startTime = startTime;
    schedules[index].endTime = endTime;
    schedules[index].day = day;
    await new Promise(resolve => setTimeout(resolve, 300)); // Simulasi async
    saveToStorage();
    renderSchedules();
  }
};

addBtn.addEventListener('click', () => addSchedule());
filterDayInput.addEventListener('change', renderSchedules);
document.addEventListener('DOMContentLoaded', () => {
  renderSchedules();
});
