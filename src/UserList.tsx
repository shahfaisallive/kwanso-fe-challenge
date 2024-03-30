import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User, ApiResponse } from './types';
import UserProfile from './UserProfile';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let url = `https://randomuser.me/api/?results=20&page=${page}`;
        if (genderFilter) {
          url += `&gender=${genderFilter}`;
        }
        const response = await axios.get<ApiResponse>(url);
        setUsers(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, genderFilter]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleGenderFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderFilter(event.target.value);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user =>
    `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {!selectedUser ? (
        <div>
          <h1>User List</h1>
          <div>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <label>
              <input
                type="radio"
                name="genderFilter"
                value=""
                checked={genderFilter === null}
                onChange={handleGenderFilterChange}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="genderFilter"
                value="male"
                checked={genderFilter === 'male'}
                onChange={handleGenderFilterChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="genderFilter"
                value="female"
                checked={genderFilter === 'female'}
                onChange={handleGenderFilterChange}
              />
              Female
            </label>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
              <button onClick={handleNextPage}>Next</button>
              <ul>
                {filteredUsers.map((user) => (
                  <li key={user.login.uuid} onClick={() => handleUserClick(user)}>
                    <img src={user.picture.thumbnail} alt="User Thumbnail" />
                    <div>
                      <p>Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                      <p>Email: {user.email}</p>
                      <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button onClick={handleBackToList}>Back to List</button>
          <UserProfile user={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default UserList;
