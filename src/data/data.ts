const users: User[] = [
    { id: 1, name: "Max Power", email: "max.power@email.com", isActive: true },
    { id: 2, name: "Ella Vator", email: "ella.vator@email.com", isActive: false },
    { id: 3, name: "Al Beback", email: "al.beback@email.com", isActive: true },
    { id: 4, name: "Paige Turner", email: "p.turner@email.com", isActive: false },
    { id: 5, name: "Justin Time", email: "j.time@email.com", isActive: true },
]

const getNextId = (users: User[]): number => {
    return 1 + Math.max(...users.map((u):number => u.id!));
}

const addUser = (user: User) => {
    user.id = getNextId(users);
    users.push(user);
}

export { users, addUser, getNextId };