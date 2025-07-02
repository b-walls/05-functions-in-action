function greetUser(name) 
{
  return `Hello, ${name}!`;
}

document.getElementById('functionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('Name').value;
  const greeting = greetUser(name);
  document.getElementById('nameDisplay').textContent = greeting;
});