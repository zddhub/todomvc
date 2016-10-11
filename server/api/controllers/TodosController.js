module.exports = {
	getAPIUrl: function(req, res) {
		return res.json({
			'todo_url': 'http://localhost:1337/todos{/todo_id}'
		})
	},
	updateAllTodoStates: function(req, res) {
		Todos.find().exec(function(err, todos) {
			ids = []
			for (todo of todos) {
				ids.push(todo.id)
			}
			Todos.update({id: ids}, {completed: req.param('completed')}).exec(function(err, todos) {
				if (err) {
					res.send(400)
				} else {
					res.send(todos)
				}
			})
		})
	},
	destroyAllTodos: function(req, res) {
		Todos.find().exec(function(err, todos) {
			ids = []
			for (todo of todos) {
				ids.push(todo.id)
			}
			Todos.destroy({id: ids}).exec(function(err, todos) {
				if (err) {
					res.send(400)
				} else {
					res.send(todos)
				}
			})
		})
	}
};
