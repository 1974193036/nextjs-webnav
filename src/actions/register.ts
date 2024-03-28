// 注册
export async function registerApi({
  email,
  password
}: {
  email: string
  password: string
}) {
  return fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.toLowerCase(),
      password: password
    })
  })
}
