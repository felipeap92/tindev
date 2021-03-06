import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import itsamatch from '../assets/itsamatch.png';
import api from '../services/api';

export default function Main({ match }) {
    const user = match.params.id;
    const [users, setUsers] = useState([]);
    const [matchDev, setMatchDev] = useState(null);
    let loading = true;

    useEffect(() => {
        (async function loadUsers() {
            const response = await api.get('/devs', { headers: { user } });

            setUsers(response.data);
            loading = false;
        })();
    }, [user]);

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user }
        });

        socket.on('match', dev => {
            setMatchDev(dev);
        });
    }, [user]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, { headers: { user } });

        setUsers(users.filter(user => user._id !== id));
    }
    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, { headers: { user } });

        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="TinDev" />
            </Link>

            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : !loading ? (
                <div className="empty">No more devs available :(</div>
            ) : (
                <div className="empty">Loading...</div>
            )}

            {matchDev && (
                <div className="match-container">
                    <img src={itsamatch} alt="It's a match" />
                    <img className="avatar" src={matchDev.avatar} alt="" />
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>

                    <button type="button" onClick={() => setMatchDev(null)}>
                        CLOSE
                    </button>
                </div>
            )}
        </div>
    );
}
