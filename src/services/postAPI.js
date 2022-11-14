import axios from 'axios';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getList(url) {
  await sleep(300);
  const response = await axios.get(url);
  return response;
};

export async function addItem(url, item) {
  const response = await axios.post(url, item);
  return response;
};

export async function deleteItem(url, id) {
  const response = await axios.delete(url+'/'+id);
  return response;
};

export async function changeItem(url, item) {
  const response = await axios.post(url, item);
  return response;
};