import Magician from "../magician";
import Daemon from "../daemon";

test('test create Magician', () => {
  const magician = new Magician('Lee');
  expect(magician).toHaveProperty('name', 'Lee');
  expect(magician).toHaveProperty('type', 'Magician');
  expect(magician).toHaveProperty('attack', 100);
  expect(magician).toHaveProperty('stoned', false);
});

test('test get/set stoned Magician', () => {
  const magician = new Magician('Lee');
  magician.stoned = true;
  expect(magician.stoned).toBeTruthy();
  magician.stoned = false;
  expect(magician.stoned).toBeFalsy();
});

test('test get attack Magician', () => {
  const magician = new Magician('Lee');
  magician.distance = 2;
  expect(magician.attack).toBe(90);
  magician.distance = 5;
  expect(magician.attack).toBe(54);
  magician.stoned = true;
  expect(magician.attack).toBe(24);
});

test('test set attack Magician', () => {
  const magician = new Magician('Lee');
  magician.attack = 200;
  expect(magician.attack).toBe(200);
});

test('test create Daemon', () => {
  const daemon = new Daemon('Han');
  expect(daemon).toHaveProperty('name', 'Han');
  expect(daemon).toHaveProperty('type', 'Daemon');
});

test('test get/set stoned Daemon', () => {
  const daemon = new Daemon('Han');
  daemon.stoned = true;
  expect(daemon.stoned).toBeTruthy();
  daemon.stoned = false;
  expect(daemon.stoned).toBeFalsy();
});

test('test get attack Daemon', () => {
  const daemon = new Daemon('Han');
  daemon.distance = 2;
  expect(daemon.attack).toBe(90);
  daemon.distance = 5;
  expect(daemon.attack).toBe(54);
  daemon.stoned = true;
  expect(daemon.attack).toBe(24);
  daemon.distance = 10;
  expect(daemon.attack).toBe(0);
});

test('test set attack Daemon', () => {
  const daemon = new Daemon('Han');
  daemon.attack = 150;
  expect(daemon.attack).toBe(150);
});