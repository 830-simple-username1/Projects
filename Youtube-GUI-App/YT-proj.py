import tkinter as tk
from tkinter import *
from pytube import YouTube
from tkinter import filedialog, messagebox

# Front-end function
def createWidgets():
    
    # Youtube link
    link_label = Label(root, text="Youtube URL: ", bg="#E8D579")
    
    # Place the Label
    link_label.grid(row=1, column=0, pady=5, padx=5)
    
    # Create Entry point for link
    root.link_text = Entry(root, width=70, textvariable=video_link)
    
    # Place video_link entry
    root.link_text.grid(row=1, column=1, pady=5, padx=5)
    
    # Destination Label
    destination_label = Label(root, text="Destination", bg="#E8D579")
    
    # PLace destination_label
    destination_label.grid(row=2, column=0, pady=5, padx=5)
    
    # Create Entry point for destination_text
    root.destination_text = Entry(root, width=50, textvariable=download_path)
    
    # Place download_path entry
    root.destination_text.grid(row=2, column=1, pady=3, padx=3)
    
    # Browse Button
    browse_but = Button(root, text="Browse", command=browse, width=10, bg="#05E8E0")
    
    # Place Browse Button
    browse_but.grid(row=2, column=2, pady=1, padx=1)
    
    # Dowload Button
    download_but = Button(root, text="Download", command=download_video, width=25, bg="#05E8E0")
    
    # Place Download Button
    download_but.grid(row=3, column=1, pady=3, padx=3)

# Backend functions
## Browse function
def browse():
    
    # Ask for Download Directory
    download_dir = filedialog.askdirectory(initialdir="C:\\Users\\Dazai-san\\Desktop\\Streams and Music")
    
    # Set Download Path to selected Directory
    download_path.set(download_dir)

## Download function
def download_video():
    
    # Get URL of video
    url = video_link.get()
    
    # Folder for download
    folder = download_path.get()
    
    # Call YouTube()
    get_video = YouTube(url) 
    
    # From which stream to download video?
    get_stream = get_video.streams.first()
    
    # Download video from stream to provided folder
    get_stream.download(folder)
    
    # Send Message
    messagebox.showinfo("Successful", "Download Successful. \nvideo: "+folder)

# Tkinter Instance
root = tk.Tk()

# GUI Geometry
root.geometry("800x140")

# Resizablity
root.resizable(False, False)

# Tittle
root.title("PyTube")

# Config Colour
root.config(background="#000000")

# video_link variable type defining
video_link = StringVar()

# download_path variable type defining
download_path = StringVar()

# Calling createWidget()
createWidgets()

# Run App
root.mainloop()