class PlaylistController < ApplicationController

    def get_likes
        playlist = Playlist.first
        render json: playlist
    end
   
    def increment_likes
        playlist = Playlist.first
        playlist.update(likes: playlist.likes + 1)
        render json: playlist
    end

    def increment_dislikes
        playlist = Playlist.first
        playlist.update(dislikes: playlist.dislikes + 1)
        render json: playlist
    end

    def decrement_likes
        playlist = Playlist.first
        playlist.update(likes: playlist.likes - 1)
        render json: playlist
    end

    def decrement_dislikes
        playlist = Playlist.first
        playlist.update(dislikes: playlist.dislikes - 1)
        render json: playlist
    end
end
