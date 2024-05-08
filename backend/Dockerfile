# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV PYTHONUNBUFFERED 1

# Run Django migrations
RUN python manage.py makemigrations
RUN python manage.py migrate


# Command to run the app
CMD ["python", "manage.py", "runserver","gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
