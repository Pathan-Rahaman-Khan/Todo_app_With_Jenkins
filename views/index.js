<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            width: 100%;
            max-width: 600px;
            background: #fff;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 25px;
        }

        .todo-form {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
        }

        .todo-form input {
            flex: 1;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
        }

        .todo-form button {
            padding: 12px 20px;
            border: none;
            background: #667eea;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
        }

        .todo-form button:hover {
            background: #5563d6;
        }

        ul {
            list-style: none;
        }

        li {
            background: #f8f9fa;
            padding: 15px;
            margin-bottom: 12px;
            border-radius: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 5px solid #667eea;
        }

        .task-text {
            font-size: 16px;
            color: #333;
        }

        .delete-btn {
            background: #ff4d4f;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s;
        }

        .delete-btn:hover {
            background: #e63946;
        }

        .empty {
            text-align: center;
            color: #888;
            padding: 20px;
        }

        .footer {
            margin-top: 20px;
            text-align: center;
            color: #777;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div class="container">

        <h1>📝 Todo Application</h1>

        <form action="/add" method="POST" class="todo-form">
            <input type="text" name="task" placeholder="Enter a new task..." required>
            <button type="submit">Add Task</button>
        </form>

        <% if (todos.length === 0) { %>
            <div class="empty">
                No tasks available. Add your first task!
            </div>
        <% } %>

        <ul>
            <% todos.forEach((todo,index)=>{ %>
                <li>
                    <span class="task-text"><%= todo %></span>

                    <form action="/delete/<%= index %>" method="POST">
                        <button class="delete-btn" type="submit">
                            Delete
                        </button>
                    </form>
                </li>
            <% }) %>
        </ul>

        <div class="footer">
            Built with Node.js, Express, Docker & Jenkins 🚀
        </div>

    </div>
</body>
</html>
