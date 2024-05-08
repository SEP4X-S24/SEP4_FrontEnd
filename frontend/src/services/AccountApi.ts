/**
 * Function to perform login API call.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<string | null>} A Promise that resolves to the JWT token if login is successful, or null otherwise.
 */
export async function login(
  username: string,
  password: string
): Promise<string | null> {
  try {
    const response = await fetch("/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      return token;
    } else {
      console.error("Login failed:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
